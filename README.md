# learning_safe_login
Proyecto personal para aprender a crear un sistema de login seguro utilizando una REST API y SQLite.
- Utiliza Node como administrador web.
- Utiliza ExpressJS como lenguaje de API REST backend.
- Utiliza HTML/SCSS/Javascript plano para frontend.

##Como iniciar:##

- Ir a carpeta server.
- Ejecutar npm install 
- Ejecutar npm start

##Como modificar base de datos:##
- Borrar archivo server/learning_login_db
- Ir a la carpeta server
- Modificar el archivo generateDB.js
- Ejecutar npm run db

##Características de un sistema seguro##

Un sistema seguro debe de...

- Encriptar contraseña de ida (cliente-servidor) y vuelta (servidor-cliente)
- Encriptar con SHA, AES o superior.
- Añadir sal a la encriptación
- Modo de sesión: cookies (Para evitar ataques XSS)
- Evitar timing attacks (implementar intentos máximos de sesión)
- Usar tabla personalizada de la DB para los usuarios y sus sesiones

Alternativas de diseño:
- Usar sessionStorage en vez de cookies (para admitir cross-origin requests)

Características adicionales que se pueden incluir:
- Utilizar SSL al montar en servidor
- Inicio de sesión passwordless para clientes google
- Toda recuperación de contraseña es a través de confirmación por correo
- Obligar al usuario a utilizar una contraseña segura

Modo de almacenamiento de la sesión

- Variable en el servidor: Evita tener que generar una consulta SQL cada vez que se comprueba la sesión.
- Lectura de registro en tabla por SQL: Evita llenar la RAM del servidor con datos de sesión del usuario.
- Archivo en el servidor: Archivo personalizado para cada usuario dentro del servidor, menos efectivo que usar SQL.