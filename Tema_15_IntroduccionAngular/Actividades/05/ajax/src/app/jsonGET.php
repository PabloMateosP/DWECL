<?php
// Para solicitudes de otros dominios.
header("Access-Control-Allow-Origin: http://localhost:4200");

//...................................... 

$nombre = $_GET['nombre'];
$ciudad = $_GET['ciudad'];
// Devuelve JSON
echo '{"nombre":"' . $nombre . '","ciudad":"' . $ciudad . '"}';
