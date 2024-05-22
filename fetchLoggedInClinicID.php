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

// Get the logged-in user's email
$email = $_SESSION['emailClinics'];

// Fetch the clinic's ID from the users table
$sql = "SELECT clinic_id FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
$clinicID = $result->fetch_assoc()['clinic_id'];

echo json_encode(['clinicID' => $clinicID]);

$stmt->close();
$conn->close();
?>
