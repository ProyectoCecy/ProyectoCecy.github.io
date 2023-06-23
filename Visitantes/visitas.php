<?php
require_once 'conexion.php'; // Archivo de conexión a la base de datos (conexion.php en tu caso)

date_default_timezone_set("America/Mexico_City"); // Establecer la zona horaria a México

$ip = $_SERVER['REMOTE_ADDR']; // Obtener la dirección IP del visitante

$cmdsql = "SELECT * FROM contador WHERE ip='$ip'";
$sqlConsultar = $conn->query($cmdsql); // Utilizar $conn en lugar de $con
$contarConsultar = $sqlConsultar->num_rows;

if ($contarConsultar == 0) { // Si no hay registros para la IP, insertar uno nuevo
    $cmdsql = "INSERT INTO contador (ip, fecha) VALUES ('$ip', NOW())";
    $sqlInsertar = $conn->query($cmdsql); // Utilizar $conn en lugar de $con
} else {
    $row = $sqlConsultar->fetch_array(); // Obtener el primer registro
    $fechaRegistro = $row['fecha'];
    $fechaActual = date("Y-m-d H:i:s"); // Fecha y hora actual del sistema
    $nuevaFecha = strtotime($fechaRegistro); // Convertir la fecha del registro a un timestamp
    $nuevaFecha = date("Y-m-d H:i:s", $nuevaFecha); // Convertir el timestamp a un formato de fecha y hora

    if ($fechaActual >= $nuevaFecha) { // Si la fecha actual es posterior o igual a la fecha del registro
        $cmdsql = "INSERT INTO contador (ip, fecha) VALUES ('$ip', NOW())";
        $sqlInsertar = $conn->query($cmdsql); // Utilizar $conn en lugar de $con
    }
}
?>
