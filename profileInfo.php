<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$database = "healthypawsusers";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Assuming you have a session variable storing the user_id
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

// Close the statement
$stmt->close();

// Close the connection
$conn->close();

// Return the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>