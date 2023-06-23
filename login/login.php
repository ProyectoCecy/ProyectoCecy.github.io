<?php

// Se requiere el archivo de conexión a la base de datos
require 'conexion.php'; 

// Se conecta con el documento form del codigo HTML
if (!empty($_POST['email']) && !empty($_POST['passwordd'])) {
    $email = $_POST['email'];
    $password = $_POST['passwordd'];

    $sql = "SELECT id, correo, contrasena FROM registro WHERE correo = ?"; // Consulta SQL para seleccionar el registro que coincide con el correo
    $stmt = $conn->prepare($sql); // Preparar la consulta
    $stmt->bind_param('s', $email); // Vincular el parámetro con el valor del correo
    $stmt->execute(); // Ejecutar la consulta
    $result = $stmt->get_result(); // Obtener el resultado de la consulta
    $row = $result->fetch_assoc(); // Obtener una fila del resultado como un arreglo asociativo

    // Verificar si el correo y la contraseña coinciden
    if ($row && password_verify($password, $row['contrasena'])) {
        echo "<script>alert('Contraseña correcta');</script>";
        echo "<script>window.location.href = '../index.php';</script>";
        exit();
    } elseif ($result->num_rows === 0) {
        // El correo no existe en la base de datos
        echo "<script>alert('No tienes una cuenta, favor de crear una');</script>";
        echo "<script>window.location.href = '../index.php';</script>";
    } else {
        // El correo existe, pero la contraseña es incorrecta
        echo "<script>alert('Correo y/o Contraseña incorrectos.');</script>";
        echo "<script>window.location.href = '../index.php';</script>";
    }

} else {
    // Campos de correo y contraseña vacíos
    echo "<script>alert('Favor de escribir en los campos.');</script>";
    echo "<script>window.location.href = '../index.php';</script>";
}

$stmt->close(); // Cerrar la sentencia preparada
$conn->close(); // Cerrar la conexión a la base de datos
?>
