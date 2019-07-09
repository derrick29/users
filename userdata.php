<?php

include_once("includes/mysql.inc.php");

if($_SERVER["REQUEST_METHOD"] == "GET"){
    if(isset($_GET['id'])){
        $qry = "select * from users where user_id = $_GET[id]";
        $result = $conn->query($qry);

        $data = array();
        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                $row_data = array("user_id"=>$row['user_id'], "first_name"=>$row['first_name'], "last_name"=>$row['last_name'], "remaining_points"=>$row['remaining_points']);
            array_push($data, $row_data);
            }
        }
        echo json_encode($data);
    }
}

if($_SERVER["REQUEST_METHOD"] == "DELETE"){
    if(isset($_GET['id'])){
        $qry = "delete from users where user_id = $_GET[id]";
        $result = $conn->query($qry);

        if($result){
            echo json_encode(array("status"=>"OK"));
        }else{
            echo json_encode(array("status"=>"FAILED"));
        }
    }
}

?>