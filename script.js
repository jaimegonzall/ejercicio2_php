console.log("Conectadooo!");

// voy a validar, lanzar mensaje de error y cambiar estilo del input.
// pero realmente, en la segunda capa de validación en HTML5, cogería
// estilos por defecto del navegador al igual que los mensajitos de error.

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('formjson').addEventListener('submit', manejadorValidacion)
});

function formValidate(){
    console.log("Activando validación");
    let hasError = false; /* no hay error de primeras, el botón envía el form */
                          /* habiendo error el botón no enviaría el form */

     let errorMsg = document.querySelector("#msg");
     errorMsg.innerHTML = ""; // determino el lugar de mensajes de error y lo dejo vacío
  
    let name = document.querySelector("#name");
    let lastName = document.querySelector("#lastName").value;
    let age = document.querySelector("#age").value;
    let dni = document.querySelector("#dni").value;
    let correo = document.querySelector("#correo").value;
    let localidad = document.querySelector("#localidad").value;


    if (name.value == "" || name.value == undefined){
      errorMsg.innerHTML += "Rellene el campo nombre </br>";
      hasError = true;
      console.log('Rellene el campo nombre'); //muestro console como ejemplo
      name.className = "error-input";         // hago el cambio de css como ejemplo
      // alert('Error, seleccione una opción'); // también se puede sacar una alerta
    }

    if (lastName == "" || lastName == undefined){
      errorMsg.innerHTML += "Rellene el campo apellido </br>";
      hasError = true;
    }

    if (age == "" || age == undefined){
      errorMsg.innerHTML += "Indique su edad. </br>";
      hasError = true;
    }

    
    function nif(dni) {
      var numero
      var letr
      var letra
      var expresion_regular_dni
     
      expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
     
      if(expresion_regular_dni.test (dni) == true){
         numero = dni.substr(0,dni.length-1);
         letr = dni.substr(dni.length-1,1);
         numero = numero % 23;
         letra='TRWAGMYFPDXBNJZSQVHLCKET';
         letra=letra.substring(numero,numero+1);
        if (letra!=letr.toUpperCase()) {
           alert('Dni erroneo, la letra del NIF no se corresponde');
           hasError = true;
         }else{
           console.log('Dni correcto');
         }
      }else{
         errorMsg.innerHTML += "Indique su DNI. </br>";
         hasError = true;
       }
    }
    nif(dni);


// NO ME SALE BIEN
/*     if (correo == "" || correo == undefined){
      errorMsg.innerHTML += "Rellene el campo email </br>";
      hasError = true;
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(correo)){
       console.log("La dirección de email " + correo + " es correcta.");
    } else {
      errorMsg.innerHTML +=  "La dirección de email es incorrecta. </br>";
      hasError = true;
    }; */

    if (correo == "" || correo == undefined){
      errorMsg.innerHTML += "Rellene el campo email </br>";
      hasError = true;
    }
    correo = correo.toLowerCase();

    if(!document.querySelector('input[name="gender"]:checked')) {
      errorMsg.innerHTML += "Debe indicar un género </br>";
      hasError = true;
    }

    if (localidad == "" || localidad == undefined){
      errorMsg.innerHTML += "Seleccione una localidad </br>";
      hasError = true;
    };

    console.log("¿Hay un error? " + hasError);

    if (hasError != true){
      document.formjson.submit(); // función SUBMIT para el envío definitivo del form
      console.log("No hay errores, debes enviarte");
    } else {
      console.log("Error de validación");
    }


    


} /* fin validación */