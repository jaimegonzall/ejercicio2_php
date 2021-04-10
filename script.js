console.log("Conectadooo!");

// voy a validar, lanzar mensaje de error y cambiar estilo del input.
// pero realmente, en la segunda capa de validación en HTML5, cogería
// estilos por defecto del navegador al igual que los mensajitos de error.

// REFACTORING
// funciones independientes

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('formjson').addEventListener('submit', formValidate)
});




var hasError = false; /* habiendo error el botón no enviaría el form */

function formValidate(){
  hasError = false;
  arrayErrores = []; // vacío el array de error para evitar duplicados
  
  validateName();
  validateLastname();
  validateEdad();
  validateNIF();
  validateEmail();
  validateLocalidad();
  validateGender();
  
  console.log("Validando... ¿Hay un error? " + hasError);
  
  if (hasError == false){
    document.formjson.submit(); // función SUBMIT para el envío definitivo del form
    console.log("No hay errores, debes enviarte");
  } else {
    console.log("Error de validación");
    let errorMsg = document.querySelector("#msg");
    errorMsg.innerHTML = "<b>Corrija los siguientes campos:</b> " + arrayErrores.join(", ") + ".";
  }

} /* fin validación */


function validateName(){
  let name = document.querySelector("#name");
  if (name.value == "" || name.value == undefined){
    arrayErrores.push("nombre");
    hasError = true;
  }};

function validateLastname(){
  let lastName = document.querySelector("#lastName").value;
  if (lastName == "" || lastName == undefined){
    arrayErrores.push("apellido");
    hasError = true;
  }};

function validateEdad(){
  let age = document.querySelector("#age").value;
  if (age == "" || age == undefined){
    arrayErrores.push("edad");
    hasError = true;
  }};

  function validateNIF(dni) {
    console.log("valida dni");
  var dni = document.querySelector("#dni").value;
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
      arrayErrores.push('DNI <i>(la letra del NIF incorrecta)</i>');
      hasError = true;
    }else{
      console.log('Dni correcto');
    }
    }else{
      arrayErrores.push("DNI");
      hasError = true;
     }}

function validateEmail(){
  let correo = document.querySelector("#correo").value;
  if (correo == "" || correo == undefined){
    arrayErrores.push("email");
    hasError = true;
  }
  correo = correo.toLowerCase();
};

function validateLocalidad(){
  let localidad = document.querySelector("#localidad").value;
  if (localidad == "" || localidad == undefined){
    arrayErrores.push("localidad");
    hasError = true;
  }};

function validateGender(){
  if(!document.querySelector('input[name="gender"]:checked')) {
    arrayErrores.push("género");
    hasError = true;
  }};