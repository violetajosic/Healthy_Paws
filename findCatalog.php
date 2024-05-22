<?php
header('Content-Type: application/json');
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mnc";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

// Check if ID is provided in the request
if (isset($_POST['findID'])) {
    $id = $_POST['findID'];

    // Perform database query
    $sql = "SELECT * FROM pets WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    
    // Fetch the result
    $row = $result->fetch_assoc();

    if ($row) {
        // Echo the required ID or any other data you want to return
        echo json_encode($row);
    } else {
        echo 'ID not found.';
    }
} else {
    echo 'ID not provided.';
}

$stmt->close();
$conn->close();
?>
