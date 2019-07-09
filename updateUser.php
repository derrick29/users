<?php
include_once("includes/mysql.inc.php");

header('Content-type: application/json');
$json = file_get_contents('php://input');
$json_decode = json_decode($json, true); 
$json_encode = json_encode($json_decode);

$id = $json_decode["id"];
$first_name = $json_decode["first_name"];
$last_name = $json_decode["last_name"];

$qry = "update users set first_name='$first_name',last_name='$last_name' where user_id=$id";

$result = $conn->query($qry);

if($result){
    echo json_encode(array("status"=>"OK"));
}else{
    echo json_encode(array("status"=>"FAILED"));
}
?>