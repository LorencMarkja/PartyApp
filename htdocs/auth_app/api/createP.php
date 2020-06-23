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
        
        $sql2 = $conn->query("SELECT id from party ORDER BY id DESC LIMIT 1");
        if($sql2->num_rows > 0){
            $data=$sql2->fetch_assoc();
            $last_id = $data['id'];
        }
        $sql3 = $conn->query("INSERT INTO playlists (party) VALUES ('$last_id')");
        http_response_code(201);
        echo json_encode(array('res' => $last_id));

         $sql3 = $conn->query("INSERT INTO participants (user, party) VALUES ('$user', '$last_id')");

    } else {
        http_response_code(500);
        echo json_encode(array('message' => 'Internal Server error  '));
      // echo " $name, $description, $genre, $mood, $startT, $endT ";

    }
} else {
    http_response_code(405);
}
