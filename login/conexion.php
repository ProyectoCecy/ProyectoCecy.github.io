<?php

// Configuración de la conexión a la base de datos
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = "formulariocecy"; // Nombre de la base de datos

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si hay errores de conexión
if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}




// codigo SQL para crear la tabla 
/* CREATE TABLE registro (
id INT PRIMARY KEY AUTO_INCREMENT,
correo VARCHAR(100),
usuario VARCHAR(100),
contrasena VARCHAR(100)
);
*/

?>







