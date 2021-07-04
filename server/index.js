const express = require("express");
const app = express();
const puerto = 3000;

// DB Sqlite3
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("learning_login_db", () => console.log("Cargando base de datos..."));

// Indicar la carpeta de archivos estáticos
app.use(express.static('client'));

// API (backend con node)
app.all('/api', (request, response) => { // Cargar backend cuando se acceda a API
    response.send("API login 1.0");
});

// Servidor cliente (frontend html plano)
app.get('*', express.static('client'));

app.listen(puerto, () => {
    console.log(`Iniciando servidor en puerto ${puerto}...`);
});