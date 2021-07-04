const loginForm = document.getElementById("iniciar-sesion-form");
loginForm.addEventListener("submit",(event) => {
    event.preventDefault();
    const nombre = document.getElementById("inputNombre");
    const password = document.getElementById("inputPassword");
    console.log(event.target);
});