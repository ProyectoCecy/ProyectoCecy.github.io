<?php
    // Configuración de la conexión a la base de datos
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'visitas';
    
    // Establecer conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_errno) {
        echo "Ha ocurrido un error al conectar con $dbname";
    }

    // ... Aquí va el código de tu aplicación ...

?>
