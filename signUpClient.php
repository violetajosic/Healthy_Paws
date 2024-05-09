<?php
session_start();
ini_set('display_errors', 1);
error_reporting(E_ALL);
$servername = "localhost";
$username = "root";
$password = "";
$database = "healthypawsusers";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Initialize error variables
$errors = [];

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['myemail'];
    $mypassword = $_POST['mypassword'];
    $repeatPassword = $_POST['repeatpassword'];
    $accMemId = $_POST['myAccNumID'];

    // Validate form data
    if (empty($email)) {
        $errors['emailError'] = "This field is required.";
    }

    if (empty($errors)) {
        // Insert data into the database
        $clientLogged = true;
        $sql = "INSERT INTO users (email, password, accMem_id, user_type) VALUES (?, ?, ?, 'client')";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssi", $email, $mypassword, $accMemId);
        if ($stmt->execute()) {
            // Send success response
            echo json_encode(["success" => true]);
            exit();
        } else {
            // Send error response
            echo json_encode(["success" => false, "message" => "Error executing SQL query: " . $stmt->error]);
            exit();
        }
        $stmt->close();
    } else {
        // Send error response
        echo json_encode(["success" => false, "errors" => $errors]);
        exit();
    }
}
?>
