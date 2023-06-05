<?php

header('Access-Control-Allow-Origin:*');

include("db.php");
$id = $_POST["id"];
$nombre =$_POST["nombre"];


$sql = "UPDATE `acciones` SET `nombre`='$nombre' WHERE `id`='$id'";

$result = mysqli_query($conn, $sql);

if (!$result) {
    die("Hubo un error en la consulta" . mysqli_error($conn));


    echo $sql;
}

?>