<?php
    include_once 'config/dbh.php';
    include_once 'config/cors.php';

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        //$data = json_decode(file_get_contents("php://input"));
    
        //$idParty = $data->party;
        //$resp = $data->youtube_p;

        $id=$conn->real_escape_string($_GET['playlistId']);
    
        $sql1= $conn->query ("SELECT id from playlists ORDER BY id DESC LIMIT 1");
        if($sql1->num_rows > 0){
            $data=$sql1->fetch_assoc();
            $last_id = $data['id'];
        }

        $sql = $conn->query("UPDATE playlists SET youtube_p='$id' WHERE id='$last_id'");

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
