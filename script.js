console.log("Conectado!")

/* document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('formjson').addEventListener('submit', 
  manejadorValidacion)
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