<?php
require_once 'conexion.php'; // parametros de conexion a mi tabla
date_default_timezone_set("America/Mexico_City"); // poner locale a M�xico para fechas y horas
$ip = $_SERVER['REMOTE_ADDR']; // obtener direccion ip del equipo que se conecta
$cmdsql = "SELECT * FROM contador WHERE ip='$ip'";
$sqlConsultar = $conn->query($cmdsql);
$contarConsultar = $sqlConsultar->num_rows;
if ($contarConsultar == 1) {
    echo "$contarConsultar vez.";
} else {
    echo "$contarConsultar veces.";
}
?>