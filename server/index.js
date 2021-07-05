const express = require("express");
const app = express();
const puerto = 3000;

// DB Sqlite3
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("learning_login_db", () => console.log("Cargando base de datos..."));

// API (backend con node)
app.get('/api', (request, response) => { // Cargar backend cuando se acceda a API
    response.send("API login 1.0");
});

app.post('/api/iniciarSesion', (request, response) => {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
    response.setHeader("Set-Cookie","token=12345;HttpOnly;Secure;SameSite=Strict");
    response.send({status:"200",mensaje:"Sesión iniciada"});
});

// Servidor cliente (frontend html plano)
app.get('*', express.static('client'));

app.listen(puerto, () => {
    console.log(`Iniciando servidor en puerto ${puerto}...`);
});