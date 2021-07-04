const loginForm = document.getElementById("iniciar-sesion-form");
loginForm.addEventListener("submit",(event) => {
    event.preventDefault();
    const nombre = document.getElementById("inputNombre").value;
    const password = document.getElementById("inputPassword").value;
    console.log("Nombre: ",nombre);
    console.log("Contraseña: ",password);
});