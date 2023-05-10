<?php

require 'db.php';


//insertamos los datos en la base de datos y limpiamos las cadenas
$nombre = $conn->real_escape_string($_POST['nombre']);



$sql = "INSERT INTO actividades (nombre) VALUES ('$nombre')";
$conn->query($sql);


?>