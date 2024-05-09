<?php
session_start();
require_once 'connection.php';
// sign up client
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['register-client'])) {
    $email = $_POST['myemail'];
    $mypassword = $_POST['mypassword'];
    $accMemId = $_POST['myAccNumID'];

    // Check if the email already exists
    $stmt_check_email = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt_check_email->bind_param("s", $email);

    // Execute the query
    if (!$stmt_check_email->execute()) {
        // Display any errors
        echo "Error executing email check query: " . $stmt_check_email->error;
        exit();
    }

    // Get the query result
    $result_check_email = $stmt_check_email->get_result();

    // Check if any rows were returned
    if ($result_check_email->num_rows > 0) {
        // Email already exists, handle error
        echo "Error: Email already exists. Please use a different email address.";
        exit();
    }

    // Email doesn't exist, proceed with sign up
    $sql = "INSERT INTO users (email, password, accMem_id, user_type) VALUES (?, ?, ?, 'client')";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Error preparing SQL query: " . $conn->error);
    }

    $stmt->bind_param("ssi", $email, $mypassword, $accMemId);

    if ($stmt->execute()) {
        header("Location: log.html");
        exit();
    } else {
        echo "Error executing SQL query: " . $stmt->error;
    }

    $stmt->close();
}



// sign up clinics (dodati da ne sme isti mail)
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['register-clinics'])) {
    echo "clinics";
    $email = $_POST['myemail'];
    $mypassword = $_POST['mypassword'];
    $clinicsId = $_POST['clinics_id'];

    // SQL query to add clinic to the table
    $sql = "INSERT INTO users (email, password, clinic_id, user_type) VALUES (?, ?, ?, 'clinics')";
    $stmt = $conn->prepare($sql);

    // Check if the prepare was successful
    if (!$stmt) {
        die("Error preparing SQL query: " . $conn->error);
    }

    // Bind parameters
    $stmt->bind_param("ssi", $email, $mypassword, $clinicsId);

    // Execute the statement
    if ($stmt->execute()) {
        header("Location: log.html");
    } else {
        echo "Error executing SQL query: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

$conn->close();
?>