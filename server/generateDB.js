/**
 * Archivo para generar las tablas y datos iniciales de la DB
 */

// DB Sqlite3
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("learning_login_db", () => console.log("Cargando base de datos..."));
db.serialize(()=>{
    // Tabla de usuarios
    const usuario = `CREATE TABLE usuario(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        password TEXT
    )`;
    db.run(usuario);
    // Tabla de sesiones
    const sesion = `CREATE TABLE sesion(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario INTEGER,
        token TEXT,
        fecha_acceso DATETIME
    )`;
    db.run(sesion);
    
    /**
     * Datos de prueba
     */
    let stmt = db.prepare('INSERT INTO usuario (nombre, password) VALUES (?,?)');
    stmt.run("mathier","mathier");
    stmt.finalize();
    stmt = db.prepare('INSERT INTO sesion (token, fecha_acceso) VALUES (?,?)');
    const now = new Date().toUTCString();
    stmt.run("asdasd12345",now);
    stmt.finalize();

    db.each("SELECT * FROM usuario", (err, row) => {
        console.log(row.id + ": " + row.nombre);
    });
    db.each("SELECT * FROM sesion", (err, row) => {
        console.log(row.id + ": " + row.token + " " + row.fecha_acceso);
    });
});
db.close();