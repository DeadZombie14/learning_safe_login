const express = require("express");
const app = express();
const puerto = 3000;

// DB Sqlite3
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("learning_login_db", () => console.log("Cargando base de datos..."));

app.get('/', (request, response) => {
    response.send("Hola mundo!");
});

app.listen(puerto, () => {
    console.log(`Iniciando servidor en puerto ${puerto}...`);
});