<?php
    include_once 'config/dbh.php';
    include_once 'config/cors.php';

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $data = json_decode(file_get_contents("php://input"));
    
        $resp = $data->youtube_p;
        $idParty = $data->party;

        $sql = $conn->query("INSERT INTO playlists (party, youtube_p) VALUES ('$idParty', '$resp')");

        if ($sql) {
            http_response_code(201);
            echo json_encode(array('message'=> 'OK'));
        } else {
            http_response_code(500);
            echo json_encode(array('message' => 'Internal Server error  '));
            //echo "$idParty, $resp";
        }
    } else {
        http_response_code(405);
    }
