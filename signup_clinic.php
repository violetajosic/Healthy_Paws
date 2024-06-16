<?php
session_start();
ini_set('display_errors', 1);
error_reporting(E_ALL);
$servername = "localhost";
$username = "root";
$password = "";
$database = "healthypawsusers";

$conn = new mysqli($servername, $username, $password, $database);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['myemail'];
    $mypassword = $_POST['mypassword'];
    $clinicsId = $_POST['clinics_id'];

    $stmt_check_email = $conn->prepare("SELECT email FROM users WHERE email = ?");
    $stmt_check_email->bind_param("s", $email);

    if (!$stmt_check_email->execute()) {
        $response = ['status' => 'failed', 'data' => 'Database error finding email.'];
        echo json_encode($response);
        exit();
    }

    $result_check_email = $stmt_check_email->get_result();
    if ($result_check_email->num_rows > 0) {
        $response = ['status' => 'failed', 'data' => 'Email already exists.'];
        echo json_encode($response);
        exit();
    }

    $stmt_check_clinic_id = $conn->prepare("SELECT * FROM users WHERE clinic_id = ?");
    $stmt_check_clinic_id->bind_param("i", $clinicsId);

    if (!$stmt_check_clinic_id->execute()) {
        $response = ['status' => 'failed', 'data' => 'Database error finding clinic ID.'];
        echo json_encode($response);
        exit();
    }

    $result_check_clinic_id = $stmt_check_clinic_id->get_result();
    if ($result_check_clinic_id->num_rows > 0) {
        $response = ['status' => 'failed', 'data' => 'Clinic ID already exists.'];
        echo json_encode($response);
        exit();
    }

    $sql = "INSERT INTO users (email, password, clinic_id, user_type) VALUES (?, ?, ?, 'clinics')";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        $response = ['status' => 'failed', 'data' => 'Error preparing SQL query: ' . $conn->error];
        echo json_encode($response);
        exit();
    }

    $stmt->bind_param("ssi", $email, $mypassword, $clinicsId);

    if ($stmt->execute()) {
        $response = ['status' => 'success'];
    } else {
        $response = ['status' => 'failed', 'data' => 'SQL error'];
    }

    $stmt->close();
    echo json_encode($response);
}

$conn->close();
?>
