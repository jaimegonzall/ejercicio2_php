console.log("Conectadooofds!");
console.log("Conectadooo!");

// voy a validar, lanzar mensaje de error y cambiar estilo del input.
// pero realmente, en la segunda capa de validación en HTML5, cogería
// estilos por defecto del navegador al igual que los mensajitos de error.

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
/*    
    let areaTexto = document.querySelector("#areaTexto").value;
    
    */

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
         alert('Dni erroneo, formato no válido');
         hasError = true;
       }
    }
    nif(dni);

    if (correo == "" || correo == undefined){
      errorMsg.innerHTML += "Rellene el campo email </br>";
      hasError = true;
    }

    if(!document.querySelector('input[name="gender"]:checked')) {
      errorMsg.innerHTML += "Debe indicar un género </br>";
      hasError = true;
    }

    if (localidad == "" || localidad == undefined){
      errorMsg.innerHTML += "Seleccione una localidad </br>";
      hasError = true;
    };



/*     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(correo)){
       alert("La dirección de email " + correo + " es correcta.");
      } else {
       alert("La dirección de email es incorrecta.");
      }
    } */






    

} /* fin validación */




/* document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('formjson').addEventListener('submit', manejadorValidacion)
  });
  
  function manejadorValidacion(e) {
  e.preventDefault();
  var msg = document.getElementById('msg');
  msg.innerText = ''; //con esto eliminamos los anteriores mensajes de error
  if(this.querySelector('[name=name]').value == '') {
  console.log('El nombre está vacío');
  msg.innerText = 'Debes escribir un nombre';
  return;
  }
  if(! validateEmail(this.querySelector('[name=correo]').value)) 
    { console.log('El email no es válido');
    msg.innerText = 'Debes escribir un email válido';
    return;
   }
   this.submit();
  }
  
  function validateEmail(email) {
    var re =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]
  {1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
   } */