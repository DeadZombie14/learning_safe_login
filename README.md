# learning_safe_login
Proyecto personal para aprender a crear un sistema de login seguro utilizando una REST API y SQLite.
- Utiliza Node como administrador web.
- Utiliza ExpressJS como lenguaje de API REST backend.
- Utiliza HTML/SCSS/Javascript plano para frontend.

###Como iniciar:###

- Ir a carpeta server.
- Ejecutar npm install 
- Ejecutar npm start

###Como modificar base de datos:###
- Borrar archivo server/learning_login_db
- Ir a la carpeta server
- Modificar el archivo generateDB.js
- Ejecutar npm run db

###Características de un sistema seguro###

Un sistema seguro debe de...

- Encriptar contraseña de ida (cliente-servidor) y vuelta (servidor-cliente)
- Encriptar con SHA, AES o superior.
- Añadir sal a la encriptación
- Modo de sesión: cookies de preferencia
- Evitar timing attacks (implementar intentos máximos de sesión)
- Usar tabla personalizada de la DB para los usuarios y sus sesiones

Características adicionales que se pueden incluir:
- Utilizar SSL al montar en servidor
- Inicio de sesión passwordless para clientes google
- Toda recuperación de contraseña es a través de confirmación por correo
- Obligar al usuario a utilizar una contraseña segura