<?php
include_once("includes/mysql.inc.php");

header('Content-type: application/json');
$json = file_get_contents('php://input');
$json_decode = json_decode($json, true); 
$json_encode = json_encode($json_decode);

$first_name = $json_decode["first_name"];
$last_name = $json_decode["last_name"];

$qry = "insert into users (first_name, last_name, remaining_points) values ('$first_name', '$last_name',0);";

$result = $conn->query($qry);

if($result){
    echo json_encode(array("status"=>"OK"));
}else{
    echo json_encode(array("status"=>"FAILED"));
}
?>