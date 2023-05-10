<?php
header('Access-Control-Allow-Origin:*');

    require "db.php";

    $sql = "SELECT id, nombre, apellido, altura, sexo, peso, actividades, fecha FROM Deportistas";

    $conn->query($sql);

    if($result = $conn->query($sql)){
        while( $row = $result->fetch_array(MYSQLI_ASSOC)){

            $arreglo[]=$row;
        }
        echo json_encode($arreglo);
    }

    

?>