<?php

if( empty($_POST['name']) ) {
                $aErrores[] = "Debe especificar el nombre";
                print $aErrores[0];
 
}



    #salida por pantalla
    echo json_encode($_POST);

    print "<pre>"; print_r($_REQUEST); print "</pre>\n";

    print "<p>Su nombre es $_REQUEST[name]</p>\n";

    $createForm = "Jaime G. Llistó";

    echo '<h5>Formulario de ' . $createForm . '</h5>';


?>


