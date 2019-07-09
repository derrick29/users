<?php
include_once("includes/mysql.inc.php");

$sql = "select * from users;";
$result = $conn->query($sql);

$data = array();

if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        $row_data = array("user_id"=>$row['user_id'], "first_name"=>$row['first_name'], "last_name"=>$row['last_name'], "remaining_points"=>$row['remaining_points']);
        array_push($data, $row_data);
    } 
}
echo json_encode($data);

?>