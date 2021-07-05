const loginForm = document.getElementById("iniciar-sesion-form");
loginForm.addEventListener("submit",(event) => {
    event.preventDefault();
    const nombre = document.getElementById("inputNombre").value;
    const password = document.getElementById("inputPassword").value;
    console.log("Nombre: ",nombre);
    console.log("Contraseña: ",password);
    evaluarSesion(true);
    fetch("/api/iniciarSesion").then((respuesta) => respuesta.json()).then((respuesta) => console.log(respuesta));
});
evaluarSesion(false);
/**
 * Simplemente revisa el estado de la sesión y actualiza el header acorde a la misma
 */
function evaluarSesion(sesion = false) {
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
            evaluarSesion(false);
        });
        header.appendChild(botonSalir);
    }
}
