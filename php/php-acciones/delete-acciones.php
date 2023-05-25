<?php
header('Access-Control-Allow-Origin:*');
include("db.php");

 $id=$_POST["id"];

 $sql="DELETE FROM acciones WHERE `id`='$id'";
    
$result = mysqli_query($conn, $sql);
if(!$result) {
    die("Hubo un error en la consulta". mysqli_error($conn));
}
