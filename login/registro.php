<?php
require 'conexion.php';

$message = '';


// Se conecta con el documento form del codigo HTML
if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['pass'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['pass'];

// Genera un hash (versión encriptada) de la contraseña en la base de datos (esto no cambia la contraseña que el usuario escogio)
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT); 

    $sql = "INSERT INTO registro (correo, usuario, contrasena) VALUES (?, ?, ?)"; // Insertamos los valores a la base de datos despues de que el usuario haya escrito los datos
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sss', $email, $name, $hashedPassword);

    if ($stmt->execute()) {
        echo "<script>alert('Los datos se han guardado correctamente.');</script>";
        echo "<script>window.location.href = '../index.php';</script>";
        exit();
    } else {
        echo "<script>alert('Error al registrar.');</script>";
        echo "<script>window.location.href = '../index.php';</script>";
    }
}
?>