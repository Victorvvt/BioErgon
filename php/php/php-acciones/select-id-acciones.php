<?php

header('Access-Control-Allow-Origin:*');

include("db.php");

 $id=$_POST['id'];

$sql="SELECT * FROM acciones WHERE id ='$id'";

$result = mysqli_query($conn, $sql);

$json = [];



while($row = mysqli_fetch_array($result)){
    $json[]= array(
        "id"=>$row['id'],
            "nombre"=>$row['nombre'],
           
    );
}
 $jsonstring = json_encode($json);
 echo $jsonstring;

 


?>