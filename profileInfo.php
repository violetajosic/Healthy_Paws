<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$database = "healthypawsusers";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user_id = $_SESSION['user_id'];

// SQL query to get user information based on the user_id
$sql = "SELECT email, start_date, expiring_date, catalog_id, clinic_id FROM users WHERE user_id = ?";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    die("Error preparing SQL query: " . $conn->error);
}

$stmt->bind_param("i", $user_id);

if (!$stmt->execute()) {
    die("Error executing SQL query: " . $stmt->error);
}

$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $userData = $result->fetch_assoc();
    $response = ['status' => 'success', 'data' => $userData];
} else {
    $response = ['status' => 'error', 'message' => 'User not found'];
}

$stmt->close();
$conn->close();

header('Content-Type: application/json');
echo json_encode($response);
?>