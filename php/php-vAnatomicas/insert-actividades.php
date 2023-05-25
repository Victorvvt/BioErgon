<?php

header('Access-Control-Allow-Origin:*');

include("db.php");

$nombre = $_POST['nombre'];

$sql = "INSERT INTO actividades (nombre) VALUE ('$nombre')";

$result = mysqli_query($conn, $sql);

echo $nombre

?>