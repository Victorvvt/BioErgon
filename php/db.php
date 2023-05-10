<?php

$conn = new mysqli("127.0.0.1","root","","biometric_measures");

if ($conn->connect_error) {
    die("Error de conexión" . $conn->connect_error );
}else{
//      echo "conexion con exito";
 }

?>