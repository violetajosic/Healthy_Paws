<?php
session_start();
ini_set('display_errors', 1);
error_reporting(E_ALL);
$servername = "localhost";
$username = "root";
$password = "";
$database = "healthypawsusers";

$conn = new mysqli($servername, $username, $password, $database);

// SIGN UP client
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['myemail'];
    $mypassword = $_POST['mypassword'];
    $accMemId = $_POST['accMemId'];

    // Check if the email already exists
    $stmt_check_email = $conn->prepare("SELECT email FROM users WHERE email = ?");
    $stmt_check_email->bind_param("s", $email);

    if (!$stmt_check_email->execute()) {
        $response = ['status' => 'failed', 'data' => 'Database error finding email.'];
        echo json_encode($response);
        exit();
    }

    $result_check_email = $stmt_check_email->get_result();
    $num_rows = $result_check_email->num_rows;

    if ($num_rows > 0) {
        $response = ['status' => 'failed', 'data' => 'Email already exists.'];
        echo json_encode($response);
        exit();
    }

    // Email doesn't exist, proceed with sign up
    $sql = "INSERT INTO users (email, password, accMem_id, user_type) VALUES (?, ?, ?, 'client')";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        $response = ['status' => 'failed', 'data' => 'Error preparing SQL query: ' . $conn->error];
        echo json_encode($response);
        exit();
    }

    $stmt->bind_param("ssi", $email, $mypassword, $accMemId);

    if ($stmt->execute()) {
        $response = ['status' => 'success'];
    } else {
        $response = ['status' => 'failed', 'data' => 'SQL error'];
    }

    $stmt->close();
    echo json_encode($response);
}


//SIGN UP clinic
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['register-clinics'])) {
    echo "clinics";
    $email = $_POST['myemail'];
    $mypassword = $_POST['mypassword'];
    $clinicsId = $_POST['clinics_id'];

    // Check if the email already exists
    $stmt_check_email = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt_check_email->bind_param("s", $email);

    if (!$stmt_check_email->execute()) {
        echo "Error executing email check query: " . $stmt_check_email->error;
        exit();
    }

    $result_check_email = $stmt_check_email->get_result();

    if ($result_check_email->num_rows > 0) {
        echo "<script>document.querySelector('.emailError2').innerHTML = Email already exists. Please use a different email adress.';</script>"; //da ne ispisuje ovo vec da ispise ispod tog inputa crveno
        exit();
    }

     // Check if the clinics_id already exists
     $stmt_check_clinic_id = $conn->prepare("SELECT * FROM users WHERE clinic_id = ?");
     $stmt_check_clinic_id->bind_param("i", $clinicsId);
 
     if (!$stmt_check_clinic_id->execute()) {
         echo "Error executing clinic_id check query: " . $stmt_check_clinic_id->error;
         exit();
     }
 
     $result_check_clinic_id = $stmt_check_clinic_id->get_result();
 
     if ($result_check_clinic_id->num_rows > 0) {
         echo "<script>document.getElementById('clinic-id-error').innerHTML = 'Error: Clinic ID already exists. Please use a different clinic ID.';</script>";
         exit();
     }
 
     $sql = "INSERT INTO users (email, password, clinic_id, user_type) VALUES (?, ?, ?, 'clinic')";
     $stmt = $conn->prepare($sql);
 
     if (!$stmt) {
         die("Error preparing SQL query: " . $conn->error);
     }
 
     $stmt->bind_param("ssi", $email, $mypassword, $clinicsId);
 
     if ($stmt->execute()) {
         header("Location: log.html");
     } else {
         echo "Error executing SQL query: " . $stmt->error;
     }
 
     $stmt->close();
     echo json_encode($response);
 }


// LOG IN
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['logInFormCheck'])) {

    $email = $_POST['myemail'];
    $my2password = $_POST['my2password'];

    $stmt_login = $conn->prepare("SELECT * FROM users WHERE BINARY email = ?");
    $stmt_login->bind_param("s", $email);

    if (!$stmt_login->execute()) {
        $response = ['status' => 'failed', 'data' => 'Database error'];
    }

    $result_login = $stmt_login->get_result();

    //check if user exist in database
    if ($result_login->num_rows === 1) {

        $row_login = $result_login->fetch_assoc();

        $storedPassword = $row_login['password'];
        if ($my2password === $storedPassword) {
            $response = ['status' => 'success'];

            if ($row_login['user_type'] === 'client') {
                $_SESSION['loginClient'] = "1";
                $_SESSION['type'] = 'client';
                $_SESSION['emailClient'] = $email;

            } elseif ($row_login['user_type'] === 'clinics') {
                $_SESSION['loginClinics'] = "1";
                $_SESSION['type'] = 'clinics';
                $_SESSION['emailClinics'] = $email;
            }

        } else {
            $response = (['status' => 'failed', 'data' => 'Ups! Password is incorrect.']);
            session_destroy();
        }
    } else {
        $response = (['status' => 'failed', 'data' => 'Login failed. Invalid email or password.']);
    }
    $stmt_login->close();
    echo json_encode($response);
}


//for connection with js if user is logged in
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');
if ((isset($_SESSION['loginClient']) && $_SESSION['loginClient'] != '')) { 
    $clientLogged = true;
    echo json_encode(['status' => 'success', 'data' => ['loginClient' => 1]]);
   
} elseif ((isset($_SESSION['loginClinics']) && $_SESSION['loginClinics'] != '')) {
    $clinicLogged = true; 
    echo json_encode(['status' => 'success', 'data' => ['loginClinics' => 1]]);
   
} else {
    echo json_encode(['status' => 'error', 'message' => 'User is not logged in']);
    
}
}
/*
//checkbox remember me NE RADI
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rememberMe = isset($_POST["remember"]) ? true : false; // Check if the "Remember me" checkbox is checked
    $email = $_POST["myemail"];
    $password = $_POST["my2password"];

    if ($email === "example@example.com" && $password === "password") {
        $_SESSION["email"] = $email;

        // If Remember Me is checked, set a cookie
        if ($rememberMe) {
            setcookie("email", $email, time() + (86400 * 30), "/"); // 30 days
        } else {
            // If Remember Me is not checked, unset the cookie
            if (isset($_COOKIE["email"])) {
                setcookie("email", "", time() - 3600, "/");
            }
        }

        // Redirect to a logged-in page
        header("Location: index.html");
        exit; //da li ovo treba?
    } else {
        echo "Invalid email or password"; //ovde treba da odradi js validaciju samo istu kao i za obican log in
    }
}*/

$conn->close();
?>
