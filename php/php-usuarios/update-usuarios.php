<?php

header('Access-Control-Allow-Origin:*');

include("db.php");
$id = $conn->real_escape_string($_POST["id"]);
$nombre = $conn->real_escape_string($_POST["nombre"]);
$apellido =  $conn->real_escape_string($_POST['apellido']);
$sexo =  $conn->real_escape_string($_POST['sexo']);
$peso =  $conn->real_escape_string($_POST['peso']);
$altura =  $conn->real_escape_string($_POST['altura']);
$actividad =  $conn->real_escape_string($_POST['actividad']);
$fecha =  $conn->real_escape_string($_POST['fecha']);

$sql = "UPDATE `deportistas` SET `nombre`='$nombre',`apellido`='$apellido',`altura`='$sexo',`actividad`='$actividad',`sexo`='$sexo',`peso`='$peso',`fecha`='$fecha' WHERE `id`='$id'";

$result = mysqli_query($conn, $sql);

if (!$result) {
    die("Hubo un error en la consulta" . mysqli_error($conn));


    echo $sql;
}

?>


