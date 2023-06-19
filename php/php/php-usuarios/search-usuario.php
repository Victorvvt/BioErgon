<?php
header('Access-Control-Allow-Origin:*');

include("db.php");


$search = $_POST['search'];

if(!empty($search)){
    $sql = "SELECT * FROM deportistas WHERE nombre like '$search%'";
   $result = $conn->query($sql);

   if(!$result){
    die("Error en la consulta".mysqli_error($conn));
   };

   $json = [];

   while($row = mysqli_fetch_array($result)){
        $json[] = array(
            "id"=>$row['id'],
            "nombre"=>$row['nombre'],
            "apellido"=>$row['apellido'],
            "peso"=>$row['peso'],
            "altura"=>$row['altura'],
            "sexo"=>$row['sexo'],
            "actividad"=>$row['actividad'],
            "fecha"=>$row['fecha']
        );
    
    }
    $jsonString = json_encode($json);
    echo $jsonString;

}
