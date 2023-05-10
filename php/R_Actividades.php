<?php
header('Access-Control-Allow-Origin:*');

    require "db.php";

    $arrele = array();
    $sql = "SELECT id, nombre  FROM actividades";

    $conn->query($sql);

    if($result = $conn->query($sql)){
        while( $row = $result->fetch_array(MYSQLI_ASSOC)){

            $arreglo[]=$row;
        }
        echo json_encode($arreglo);
    }

    

?>