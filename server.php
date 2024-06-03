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
    $mypassword = $_POST['mypassword']; //kaze undefined

    $stmt_login = $conn->prepare("SELECT * FROM users WHERE BINARY email = ?");
    $stmt_login->bind_param("s", $email);

    if (!$stmt_login->execute()) {
        $response = ['status' => 'failed', 'data' => 'Database error'];
    }

    $result_login = $stmt_login->get_result();

    if ($result_login->num_rows === 1) {
        $row_login = $result_login->fetch_assoc();
        $storedPassword = $row_login['password'];
        if ($mypassword === $storedPassword) {
            $response = ['status' => 'success'];

            if ($row_login['user_type'] === 'client') {
                $_SESSION['loginClient'] = "1";
                $_SESSION['type'] = 'client';
                $_SESSION['emailClient'] = $email;
            } elseif ($row_login['user_type'] === 'clinic') {
                $_SESSION['loginClinics'] = "1";
                $_SESSION['type'] = 'clinic';
                $_SESSION['emailClinics'] = $email;
            }

        } else {
            $response = ['status' => 'failed', 'data' => 'Ups! Password is incorrect.']; //treba u js da se prikaze
            session_destroy();
        }
    } else {
        $response = ['status' => 'failed', 'data' => 'Login failed. Invalid email or password.'];
    }
    $stmt_login->close();
    echo json_encode($response);
}

$conn->close();
?>
