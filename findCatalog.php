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

$id = intval($_GET['id']);

$sql = "SELECT image, pet_name, owner_email, species, pet_age, age_converted FROM pets WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo json_encode(['error' => 'No catalog found with the given ID']);
}

$stmt->close();
$conn->close();
?>
