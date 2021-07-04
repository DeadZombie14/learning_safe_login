/**
 * Archivo para generar las tablas y datos iniciales de la DB
 */

// DB Sqlite3
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("learning_login_db", () => console.log("Cargando base de datos..."));
db.serialize(()=>{
    db.run("CREATE TABLE lorem (info TEXT)");
    
    let stmt = db.prepare('INSERT INTO lorem VALUES (?)')
    for (let i = 0; i < 10; i++) {
        stmt.run('Ipsum ' + i);
    }
    stmt.finalize();

    db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
        console.log(row.id + ': ' + row.info);
    });
});
db.close();