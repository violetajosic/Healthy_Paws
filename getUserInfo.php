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

// Check if user is logged in
if (!isset($_SESSION['loginClient']) && !isset($_SESSION['loginClinics'])) {
    echo json_encode(['status' => 'error', 'message' => 'User not logged in']);
    exit();
}

// Retrieve user information from the database
$userEmail = '';

if (isset($_SESSION['loginClient']) && $_SESSION['loginClient'] != '') {
    $userEmail = $_SESSION['emailClient'];
    $response = ['status' => 'success', 'data' => ['loginClient' => 1]];

} elseif (isset($_SESSION['loginClinics']) && $_SESSION['loginClinics'] != '') {
    $userEmail = $_SESSION['emailClinics'];
    $response = ['status' => 'success', 'data' => ['loginClinics' => 1]];
}

// Prepare and execute SQL query to fetch user information
$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $userEmail);
$stmt->execute();
$result = $stmt->get_result();

// Check if user exists
if ($result->num_rows > 0) {
    $userData = $result->fetch_assoc();

    // Return user information as JSON data
    $response['data'] = $userData;
} else {
    $response = ['status' => 'error', 'message' => 'User not found'];
}

// Close database connection
$stmt->close();
$conn->close();

header('Content-Type: application/json');
echo json_encode($response);
?>
