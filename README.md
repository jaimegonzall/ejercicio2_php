# PROYECTO FORMULARIO 🚀
> Ejercicio para la creación de un formulario enviado por AJAX a un controlador y que valide al menos en la capa JS y en la capa HTML.

## Requisitos 📋
> Creación de un formulario con validación en HTML y JS enviado mediante AJAX con el método post a un controlador.php.
> Subiremos el proyecto a Git en varias fases.
> Si estamos realizando una parte y no nos gusta o creemos que lo podemos mejorar, no lo eliminaremos. Crearemos otra rama git con esa mejoría.
> Solo usaremos __lenguaje vanilla__.
> HTML, CSS, JS, PHP.

### 1ª ITERACIÓN
* Campo nombre.
* Campo apellidos.
* Campo edad.
* Campo género (hombre, mujer, otros) con radiobuttons.
* Campo DNI.
* Campo email.
* Campo textArea.
* Campo select.

Enviar mediante Ajax con el método post al controlador.

### 2ª ITERACIÓN
* Todos los campos son obligatorios
* La edad no puede ser inferior a 18 años.
* Validar el dni.
* Validar el email.
* Enviarle al controlador, junto con los campos del formulario, una variable "creatorForm" que contenga vuestro nombre.

### 3ª ITERACIÓN
* El nombre y los apellidos se tienen que enviar en un formato tal que la primera letra de cada palabra sea mayúsculas.
Desde javaScript se hace este formateo independientemente de cómo lo haya escrito el usuario.

* TextArea: La página web no le permite al usuario escribir más de 50 caracteres. Al teclear más de 50 caracteres
estos no aparecen en el textArea.

* Agregar los campos "fecha inicio" y "fecha fin" y enviarle al controlador la cantidad de días que haya entre estas dos fechas.

* Agregar un campo que permita introducir un número con únicamente dos decimales. El usuario no puede escribir
en el campo más de dos decimales ya que el javaScript no le permite insertar más decimales.

### 4ª ITERACIÓN
* Darle estilos a la página.
* Ha de ser responsive.