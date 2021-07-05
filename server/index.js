const express = require("express");
const app = express();
const puerto = 3000;

// DB Sqlite3
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("learning_login_db", () => console.log("Cargando base de datos..."));

// API (backend con node)
app.use(express.json()); // Parsear parametros JSON

app.get('/api', (request, response) => { // Cargar backend cuando se acceda a API
    response.send("API login 1.0");
});

app.post('/api/iniciarSesion', (request, response) => {
    const [nombre,password] = [request.body.nombre, request.body.password];
    const consulta = db.prepare(`SELECT nombre FROM usuario WHERE nombre = ? AND password = ?`);
    consulta.get(nombre,password,callback=(err, registro) => {
        if(registro) {
            response.setHeader("Set-Cookie","token=12345;HttpOnly;Secure;SameSite=Strict"); // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
            response.send({mensaje:"Sesión valida."});
        }
        else {
            response.status(401).send({mensaje:"Sesión invalida."});
        }
    });
});

// Servidor cliente (frontend html plano)
app.get('*', express.static('client'));

app.listen(puerto, () => {
    console.log(`Iniciando servidor en puerto ${puerto}...`);
});