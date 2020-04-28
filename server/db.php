<?php
    
    $servername = "localhost";
    $dbUsername = "classeinlinea";
    $dbPassword = "";
    $dbName = "my_classeinlinea";

    $conn = mysqli_connect($servername, $dbUsername, $dbPassword,  $dbName);

    if(!$conn){
        die("Connection failed: ".mysqli_connect_error());
    }
?>