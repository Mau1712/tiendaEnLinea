
/* Objeto crear usuario */

class Usuario {
    constructor(nombre, mail, contrasenia) {
        this.nombre = nombre;
        this.mail = mail;
        this.contrasenia = contrasenia;
    }


}

const usuarios = [];

const newUserForm = document.getElementById("newUserForm");

newUserForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const mail = document.getElementById("email").value;
    const contrasenia = document.getElementById("pass").value;

    const usuario = new Usuario(nombre, mail, contrasenia);

    usuarios.push(usuario);

    //LocalStorage
    localStorage.setItem("Usuario", JSON.stringify(usuarios));

    //Reset
    newUserForm.reset();

})


