<?php

require 'db.php';


//insertamos los datos en la base de datos y limpiamos las cadenas
$nombre = $conn->real_escape_string($_POST['nombre']);
$apellido = $conn->real_escape_string($_POST['apellido']);
$altura = $conn->real_escape_string($_POST['altura']);
$sexo = $conn->real_escape_string($_POST['sexo']);
$peso = $conn->real_escape_string($_POST['peso']);
$actividades = $conn->real_escape_string($_POST['actividades']);
$fecha = $conn->real_escape_string($_POST['fecha']);


$sql = "INSERT INTO deportistas (nombre, apellido, altura, sexo, peso, actividades, fecha ) VALUES ('$nombre','$apellido',
$altura,'$sexo',$peso,'$actividades','$fecha')";
$conn->query($sql);


?>