<?php
header('Access-Control-Allow-Origin:*');

include("db.php");


    $nombre =$_POST["nombre"];
    $apellido =  $conn->real_escape_string($_POST['apellido']);
    $sexo =  $conn->real_escape_string($_POST['sexo']);
    $peso =  $conn->real_escape_string($_POST['peso']);
    $altura =  $conn->real_escape_string($_POST['altura']);
    $actividad =  $conn->real_escape_string($_POST['actividad']);
    $fecha =  $conn->real_escape_string($_POST['fecha']);

    $sql = "INSERT INTO deportistas (nombre, apellido, sexo, peso, altura, actividad, fecha) VALUES ('$nombre', '$apellido','$sexo', '$peso', '$altura','$actividad','$fecha')";
    
    $result = mysqli_query($conn, $sql);

    if(!$result) {
        die("Hubo un error en la consulta". mysqli_error($conn));
    

    echo $sql;
}

?>
