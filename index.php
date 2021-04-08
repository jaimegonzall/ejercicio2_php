<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario AJAX y PHP</title>
</head>
<body>

<h1>Ejercicio de formulario</h1>



    <form action="controller.php" method="post" name="Formulario" id="formjson">

        <fieldset>
            <legend>Datos personales</legend>
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" autofocus>
            <label for="lastName">Apellidos:</label>
            <input type="text" id="lastName" name="lastName" autocomplete="off">
            <label for="age">Edad:</label>
            <input type="number" name="age" id="age">
            <label for="dni">DNI:</label>
            <input type="text" name="dni" id="dni">
            <label for="correo">Email:</label>
            <input type="email" name="correo" id="correo">
        </fieldset>

        <fieldset>
            <legend>Género</legend>
            <input type="radio" id="hombre" name="gender" value="hombre">
            <label for="hombre">Hombre</label><br>
            <input type="radio" id="mujer" name="gender" value="mujer">
            <label for="mujer">Mujer</label><br>
            <input type="radio" id="otros" name="gender" value="otros">
            <label for="otros">Otros</label><br>
        </fieldset>

        <fieldset>
            <legend>Otros datos</legend>
            <label for="areaTexto">Campo de texto:</label>
            <textarea name="areaTexto" id="" cols="100" rows="6" placeholder="Text Area">
            </textarea><br>
            <label for="localidad">Seleccione su localidad:</label>
            <select name="localidad" id="localidad">
              <option value="Oviedo">Oviedo</option>
              <option value="Gijón">Gijón</option>
              <option value="Avilés">Avilés</option>
              <option value="Siero">Siero</option>
              <option value="Llanera">Llanera</option>
              <option value="Mieres">Mieres</option>
              <option value="Langreo">Langreo</option>
            </select>
        </fieldset>

        <div id="msg"></div>
        <button id="btnEnviar" type="submit">
            Enviar
        </button>

    </form>




<script src="script.js"></script>
</body>
</html>