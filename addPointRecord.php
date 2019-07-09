<?php

include_once("includes/mysql.inc.php");

header('Content-type: application/json');
$json = file_get_contents('php://input');
$json_decode = json_decode($json, true); 
$json_encode = json_encode($json_decode);

$id = $json_decode["user_id"];
$added_points = $json_decode["added_points"];
$deducted_points = $json_decode["deducted_points"];
$remarks = $json_decode["remarks"];
$type = $json_decode["type"];

$qry = "insert into points_history (user_id, added_points, deducted_points, remarks) values ('$id', '$added_points','$deducted_points', '$remarks');";

$result = $conn->query($qry);

if($result){
    $qry2 = "select remaining_points from users where user_id = $id";
    $result2 = $conn->query($qry2);

    if($result2->num_rows > 0){
        $rprow = $result2->fetch_assoc();
        $rp = $rprow["remaining_points"];

        $trp = 0;
        
        if($type == "add"){
            $trp = $rp+$added_points;
        }else if($type == "deduct"){
            $trp = $rp-$deducted_points;
        }

        $qry3 = "update users set remaining_points = $trp where user_id = $id";
        $result3 = $conn->query($qry3);

        if($result3){
            echo json_encode(array("status"=>"OK","remaining"=>$trp));
        }else{
            echo json_encode(array("status"=>"FAILED"));
        }
    }else{
        echo json_encode(array("status"=>"FAILED"));
    }

}else{
    echo json_encode(array("status"=>"FAILED"));
}

?>