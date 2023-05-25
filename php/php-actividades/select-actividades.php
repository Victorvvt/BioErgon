<?php
header('Access-Control-Allow-Origin:*');

include("db.php");


$sql = "SELECT * FROM actividades";

$result = mysqli_query($conn, $sql);

$json = [];

while ($row = mysqli_fetch_array($result)) {

    $json[] = array(
        "id" => $row['id'],
        "nombre" => $row['nombre']
    );
}

$jsonstring = json_encode($json);
echo $jsonstring;
