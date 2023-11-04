//declaro todos los input en variables
let general         = 200;
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");

/*
//validacion de datos de nombre y email
const validarDatos = () => {
    const nombreInput = document.getElementById('nombre').value;
    const apellidoInput = document.getElementById("apellido").value;
    const emailInput = document.getElementById('email').value;
    let nombreValido = false;
    let emailValido = false;
    let apellidoValido = false;
    if (nombreInput.value === ''){
        alert("Por favor, ingrese su nombre");
        } else {
            nombreValido = true;
            }
            if (apellidoInput.value === ''){
                alert("Por favor, ingrese su nombre");
                } else {
                    nombreValido = true;
                    }        
    if (emailInput.value === ''){
                alert("Ingrese un email válido");
            } else {
                emailValido = true;
            }
}
*/

//funcion para calcular el total en OnClick
const calcularTotal = (categoria, cantidad) => {
    //let cantidad = document.getElementById("cantidad").value;
    //let categoria = document.getElementById("categoria").value;
    if (categoria === "Estudiante"){
        let total = 40 * cantidad;
        document.write("<p>" + total + "</p>");
        alert("categoria "+ categoria + "cantidad " + cantidad);
    }else if (categoria === "Trainee"){
        let total = 100 * cantidad;
        document.write("<p>" + total + "</p>");
        alert("categoria "+ categoria + "cantidad " + cantidad);    
    }else if (categoria === "Junior"){
        let total = 70 * cantidad;
        document.write("<p>" + total + "</p>");
        alert("categoria "+ categoria + "cantidad " + cantidad);
    } else if (categoria === "general"){
        let total = 200 * cantidad;
        document.write("<p>" + total + "</p>");
        alert("categoria "+ categoria + "cantidad " + cantidad);
    }return total;
}
