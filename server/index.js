const express = require("express");
const app = express();
const puerto = 3000;

const cookieSystem = require("cookie-parser");

// DB Sqlite3
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("learning_login_db", () => console.log("Cargando base de datos..."));

// API (backend con node)
app.use(express.json()); // Parsear parametros JSON
app.use(cookieSystem()); // Parsear parametros JSON

app.get('/api', (request, response) => { // Cargar backend cuando se acceda a API
    response.send("API login 1.0");
});

app.post('/api/iniciarSesion', (request, response) => {
    const [nombre,password] = [request.body.nombre, request.body.password];
    const consulta = db.prepare(`SELECT id, nombre FROM usuario WHERE nombre = ? AND password = ?`);
    consulta.get(nombre,password,callback=(err, registro) => {
        if(registro) {
            // Crear token de usuario
            const nuevoToken = "asdasd12345";
            const consulta = db.prepare(`UPDATE sesion SET token = "${nuevoToken}" WHERE usuario = ?`);
            consulta.run(registro.id);
            response.setHeader("Set-Cookie",`token=${nuevoToken};HttpOnly;Secure;SameSite=Strict`); // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
            response.send({estado:"valida"});
        }
        else {
            response.status(403).send({estado:"invalida"});
        }
    });
});

app.get('/api/comprobarSesion', (request, response) => {
    const sesion = request.cookies;
    if(sesion.token) {
        const consulta = db.prepare(`SELECT token FROM sesion WHERE token = ?`);
        consulta.get(sesion.token,callback=(err, registro) => {
            if(registro) {
                response.send({estado: "valida"});
            }
            else {
                response.status(403).send({estado: "invalida"});
            }
        });
    } else
        response.status(403).send({estado: "invalida"});
});

app.get('/api/cerrarSesion', (request, response) => {
    const sesion = request.cookies;
    response.setHeader("Set-Cookie","token=;HttpOnly;Secure;SameSite=Strict");
    response.send({mensaje: "Sesión finalizada."});
    if(sesion.token) { // Borrar token en la DB si existe
        const consulta = db.prepare(`UPDATE sesion SET token = "" WHERE token = ?`);
        consulta.run(sesion.token);
    }
});

// Servidor cliente (frontend html plano)
app.get('*', express.static('client'));

app.listen(puerto, () => {
    console.log(`Iniciando servidor en puerto ${puerto}...`);
});