<?php
include_once 'config/dbh.php';
include_once 'config/cors.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    $name = $data->name;
	$description = $data->description;
	$genre = $data->genre;
    $mood = $data->mood;
    $user= $data->user;






    // U can do validation like unique username etc....


    $sql = $conn->query("INSERT INTO party (name, description, genre, mood, organizer) VALUES ('$name', '$description', '$genre', '$mood', '$user')");
    if ($sql) {
        http_response_code(201);
        echo json_encode(array('message' => 'Party created'));
    } else {
        http_response_code(500);
        echo json_encode(array('message' =>'Internal Server error'));
      // echo " $name, $description, $genre, $mood, $startT, $endT ";

    }
} else {
    http_response_code(405);
}
