<?php
include_once 'config/dbh.php';
include_once '../vendor/autoload.php';

use \Firebase\JWT\JWT;

include_once 'config/cors.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
   // echo 'Get';
   $data = array();

        $id= $conn->real_escape_string($_GET['id']);
        $sql= $conn->query("SELECT youtube_p FROM playlists WHERE party='$id' ");

        while ($d = $sql->fetch_assoc()){
            $data[]=$d;
        }
        
        exit (json_encode($data));
} else {
        http_response_code(400);
        echo json_encode(array('message' => 'Failed!'));
}