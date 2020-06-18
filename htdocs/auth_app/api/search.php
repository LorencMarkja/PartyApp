<?php
include_once 'config/dbh.php';
include_once 'config/cors.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    $condition = $data->searchCond;

    $sql = $conn->query("SELECT * FROM party WHERE name LIKE'%$condition%' OR genre LIKE'%$condition%' OR mood LIKE'%$condition%'");
  $result= array();


   if ($sql) {
        http_response_code(201);
             while ($d = $sql->fetch_assoc()){
                    $result[]=$d;
             }

    }
    else {
        http_response_code(500);
        echo json_encode(array('message' => 'Internal Server error  '));

    }
    exit (json_encode($result));
}

 else {
    http_response_code(405);
}

