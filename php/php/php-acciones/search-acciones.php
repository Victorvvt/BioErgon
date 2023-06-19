<?php
header('Access-Control-Allow-Origin:*');

include("db.php");
$nombre = $_POST['dato'];

$sql = "SELECT * FROM acciones WHERE nombre like '$nombre%'";

$result = mysqli_query($conn, $sql);

$json = [];

while($row = mysqli_fetch_array($result)){
    $json[]=array(
        "id"=>$row['id'],
        "nombre"=>$row['nombre']
    );


}
$jsonstring=json_encode($json);
echo $jsonstring;