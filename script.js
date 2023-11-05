//declaro todos los input en variables
/*
let general         = 200;
let descuentoEstudiante = 40;
let descuentoTrainee    = 100;
let descuentoJunior     = 160;

let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let email = document.getElementById("email").value;
let cantidad = document.getElementById("cantidad").value;
let categoria = document.getElementById("categoria").value;


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
/*
//funcion para calcular el total
const calcularTotal = (cat, cant) => {
    cant = parseInt(cantidad);
    cat = parseInt(categoria);
    let totalAPagar;
    if (cat === "Estudiante"){
        totalAPagar = descuentoEstudiante * cant;
        //document.write("<p>" + total + "</p>");//element.innerHTML
        //alert("categoria "+ categoria + "cantidad " + cantidad);
    }else if (cat === "Trainee"){
        totalAPagar = descuentoTrainee * cant;
        //document.write("<p>" + total + "</p>");
        //alert("categoria "+ categoria + "cantidad " + cantidad);    
    }else if (cat === "Junior"){
        totalAPagar = descuentoJunior * cant;
        //document.write("<p>" + total + "</p>");
        //alert("categoria "+ categoria + "cantidad " + cantidad);
    } else if (cat === "General"){
        totalAPagar = 200 * cant;
        //document.write("<p>" + total + "</p>");
        alert(totalAPagar);
    }//return totalAPagar;
    total.innerHTML = totalAPagar;
    alert(totalAPagar);
}

resumen.addEventListener('submit', calcularTotal);
 
*/
let valorTicket         = 200;
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;


let nombre              = document.getElementById("nombre");
let divErrorNombre      = document.getElementById("memsajeErrorNombre");
let apellido            = document.getElementById("apellido");
let divErrorApellido    = document.getElementById("memsajeErrorApellido");
let mail                = document.getElementById("mail");
let divErrorEmail       = document.getElementById("memsajeErrorEmail");
let cantidadTickets     = document.getElementById("cantidad");
let divErrorCantidad    = document.getElementById("memsajeErrorCantidad");
let categoria           = document.getElementById("categoria");
let divErrorCategoria   = document.getElementById("memsajeErrorCategoria");

const quitarClaseError = () => {
    let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for (let i = 0; i < listaNodos.length; i++) {
        listaNodos[i].classList.remove('is-invalid')
    }
    let listaNodosdiv = document.querySelectorAll(".invalid-feedback");
    for (let i = 0; i < listaNodosdiv.length; i++) {
        listaNodosdiv[i].classList.remove("mostrarError");
    }
}

const totalAPagar = () => {
    quitarClaseError();
    if(nombre.value === "") {
        nombre.classList.add("is-invalid");
        divErrorNombre.classList.add("mostrarError");
        nombre.focus();
        return;
    }
    if(apellido.value === ""){
        apellido.classList.add("is-invalid");
        divErrorApellido.classList.add("mostrarError");
        apellido.focus();
        return;
    }
    if (mail.value === ""){
        mail.classList.add("is-invalid");
        divErrorEmail.classList.add("mostrarError");
        mail.focus();
        return;
    }
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }
    if (!emailValido(mail.value)) {
        mail.classList.add("is-invalid");  
        divErrorEmail.classList.add("mostrarError");
        mail.focus();
        return;
    }
    if ((cantidadTickets.value < 1) || (isNaN(cantidadTickets.value))) {
        cantidadTickets.classList.add("is-invalid");
        divErrorCantidad.classList.add("mostrarError");
        cantidadTickets.focus();
        return;
    }
    if (categoria.value == "") {
        categoria.classList.add("is-invalid");
        divErrorCategorias.classList.add("mostrarError");
        categorias.focus();
        return;
    }
    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    switch (categoria.value) {
        case "0":
            totalValorTickets = totalValorTickets;
            break;
        case "1":
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
            break;
        case "2":
            totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
            break;
        case "3":
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
            break;
    }
    total.innerHTML = totalValorTickets;
    console.log("funciona");
}

resumen.addEventListener('click', totalAPagar);

const resetTotalAPagar = () => {
    quitarClaseError();
    total.innerHTML = "";
}
borrar.addEventListener('click', resetTotalAPagar);
