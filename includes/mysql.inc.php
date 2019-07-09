<?php

$server_name = "localhost";
$db_name = "users";
$db_username = "root";
$db_password = "";

$conn = new mysqli($server_name, $db_username, $db_password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

?>