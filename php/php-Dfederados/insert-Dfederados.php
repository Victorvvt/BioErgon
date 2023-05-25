<?php
header('Access-Control-Allow-Origin:*');

include("db.php");


$nombre = $_POST["nombre"];
$usuario = $_POST["usuario"];


$sql = "INSERT INTO  deportes_federados (nombre, usuarioFederado) VALUES ('$nombre','$usuario')";

$result = mysqli_query($conn, $sql);

if (!$result) {
    die("Hubo un error en la consulta" . mysqli_error($conn));


    echo $sql;
}
