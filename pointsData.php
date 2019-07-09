<?php

include_once("includes/mysql.inc.php");

if($_SERVER["REQUEST_METHOD"] == "GET"){
    if(isset($_GET['id'])){
        $qry = "select * from points_history where user_id = $_GET[id]";
        $result = $conn->query($qry);

        $data = array();
        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                $row_data = array("points_id"=>$row['points_id'], "added_points"=>$row['added_points'], "deducted_points"=>$row['deducted_points'], "remarks"=>$row['remarks'], "created_at"=>$row['created_at']);
            array_push($data, $row_data);
            }
        }
        echo json_encode($data);
    }
}

?>