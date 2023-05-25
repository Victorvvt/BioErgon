<?php

header('Access-Control-Allow-Origin:*');

include("db.php");

$sql = "SELECT * FROM deportistas";

$result = mysqli_query($conn, $sql);


$json = [];

while ($row = mysqli_fetch_array($result)) {
    $json[] = array(
        "id" => $row['id'],
        "nombre" => $row['nombre'],
        "apellido" => $row['apellido'],
        "peso" => $row['peso'],
        "altura" => $row['altura'],
        "sexo" => $row['sexo'],
        "actividad" => $row['actividad'],
        "fecha" => $row['fecha']
    );
}
$jsonstring = json_encode($json);
echo $jsonstring;
