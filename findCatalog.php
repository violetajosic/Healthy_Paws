<?php
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
    
    // Check if ID exists
    if ($result->num_rows > 0) {
        // ID found, send response
        header('Location: catalog.html');
    } else {
        // ID not found, send response
        echo json_encode(['status' => 'ID not found']);
    }
} else {
    // ID not provided, send response
    echo json_encode(['status' => 'ID not provided']);
}

$stmt->close();
$conn->close();
?>


$stmt->close();
$conn->close();
?>
