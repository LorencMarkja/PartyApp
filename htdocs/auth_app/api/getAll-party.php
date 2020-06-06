<?php
include_once 'config/dbh.php';
include_once '../vendor/autoload.php';

use \Firebase\JWT\JWT;

include_once 'config/cors.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
   // echo 'Get';
   $data = array();
   if(isset($_GET['id'])){
        $id= $conn->real_escape_string($_GET['id']);
        $sql= $conn->query("SELECT * FROM party WHERE organizer='$id' ");
        while ($d = $sql->fetch_assoc()){
                $data[]=$d;

            }

    }
   else{
        $sql= $conn->query("SELECT *FROM party WHERE status='1' ");
    while ($d = $sql->fetch_assoc()){
        $data[]=$d;
        
    }
     //return
}
    exit (json_encode($data));
}
