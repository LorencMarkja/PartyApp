<?php
include_once 'config/dbh.php';
include_once 'config/cors.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    $user = $data->user;
	$party = $data->party;

    $sql = $conn->query("INSERT INTO participants (user, party) VALUES ('$user', '$party')");
    if ($sql) {
        http_response_code(201);
        echo json_encode(array('message' => 'User added'));
    }
    else {
        http_response_code(500);
       // echo json_encode(array('message' => 'Internal Server error   '));

    }
}



if ($_SERVER['REQUEST_METHOD'] == 'GET') {

 if(isset($_GET['party'])){

       $party= $conn->real_escape_string($_GET['party']);



       $sql= $conn->query("SELECT count( distinct user) as number FROM participants WHERE party='16' ;");



       if ($sql) {
                http_response_code(201);

                 $result = $sql->fetch_assoc();
            }
            else {
                    http_response_code(500);
                   echo json_encode(array('message' => 'Internal Server error   '));

                }

   }
    exit (json_encode($result));


}

