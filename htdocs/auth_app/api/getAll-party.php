<?php
include_once 'config/dbh.php';
include_once '../vendor/autoload.php';

use \Firebase\JWT\JWT;

include_once 'config/cors.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
   // echo 'Get';
    
    $data = array();
    $sql= $conn->query("SELECT *FROM party WHERE status='1' ");
    while ($d = $sql->fetch_assoc()){
        $data[]=$d;
        
    }
    exit (json_encode($data)); //return
}