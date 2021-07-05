const loginForm = document.getElementById("iniciar-sesion-form");
loginForm.addEventListener("submit",(event) => {
    event.preventDefault();
    const nombre = document.getElementById("inputNombre").value;
    const password = document.getElementById("inputPassword").value;
    console.log("Nombre: ",nombre);
    console.log("Contraseña: ",password);
    const datos = {
        nombre: nombre,
        password: password
    }
    fetch("/api/iniciarSesion",
        {
            method: "POST", 
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then((respuesta) => respuesta.json()).then((respuesta) => console.log(respuesta));
    evaluarSesion();
});
evaluarSesion();
/**
 * Simplemente revisa el estado de la sesión y actualiza el header acorde a la misma
 */
function evaluarSesion() {
    const sesion = false;
    fetch("/api/comprobarSesion").then((respuesta) => respuesta.json()).then((respuesta) => {
        console.log(respuesta);
    });
    const header = document.querySelector(".header");
    header.innerHTML = "";
    if(!sesion) {
        const sesionInfo = document.createElement("div");
        sesionInfo.id = "estadoSesion";
        sesionInfo.textContent = "Sesión no iniciada";
        header.appendChild(sesionInfo);
    } else {
        const botonSalir = document.createElement("div");
        botonSalir.id = "botonSalir";
        botonSalir.textContent = "Salir";
        botonSalir.addEventListener("click",(event)=>{
        });
        header.appendChild(botonSalir);
    }
}
