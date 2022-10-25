/* Ingreso */
// alert("Inicie Sesión");

// const usuarioAutorizado = "admin";
// const contraseniaAutorizada = "admin";

// let usuario = prompt("Ingrese su nombre de usuario: ");
// let contrasenia = prompt("Ingrese su contraseña");

// for (let i = 0; i < 2; i++) {
//     if (usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
//         alert("Bienvenido a MBOX")
//         break;
//     } else {
//         alert("Usuario o Contraeña invalida, intentelo de nuevo")
//         usuario = prompt("Ingrese el nombre de usuario:");
//         contrasenia = prompt("Ingrese su contraseña:");
//     }
// }



// /* Confirma si es mayor de edad */

// alert("COMFIRME QUE ES MAYOR DE EDAD PARA COMPRAR EN ESTA TIENDA")

// let ingreseSuEdad = parseInt(prompt("Ingrese su edad "))
// const edadIngresada = (ingreseSuEdad)

// if(edadIngresada >= 18){
//     alert("Puede Continuar comprando")
// }else{
//     alert("Lo siento, tienda no apta para menores de edad")
// }

const usuarioAutorizado = "admin";
const contraseniaAutorizada = "admin";
const inicioSeion = document.getElementById("inicioSeion");

inicioSeion.addEventListener("submit", (e) => {
    e.preventDefault();

    usuario = document.getElementById("usuario").value;
    contrasenia = document.getElementById("contrasenia").value;

    if (usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
        window.location = "productos.html";
    }

})




