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



// sign up clinics (dodati da ne sme isti mail) //pusti ga na log in page iako je npr prazan znaci ne izvrsi js validaciju
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


// LOG IN RADI
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['logInFormCheck'])) {
    
    $email = $_POST['myemail'];
    $my2password = $_POST['my2password'];

    $stmt_login = $conn->prepare("SELECT * FROM users WHERE BINARY email = ?");
    $stmt_login->bind_param("s", $email);

    echo "Email: " . $email; // Output email for debugging

    // Izvršavanje upita
    if (!$stmt_login->execute()) {
        echo "Error: " . $stmt_login->error;
    }

    // Dohvaćanje rezultata upita
    $result_login = $stmt_login->get_result();

    echo "Num Rows: " . $result_login->num_rows; // Output number of rows for debugging


    // Provjera je li pronađen korisnik
    if ($result_login->num_rows === 1) {

        $row_login = $result_login->fetch_assoc();

        $storedPassword = $row_login['password'];
        // Direct comparison for debugging purposes (remove in production)
        if ($my2password === $storedPassword) {
        
            // Lozinke se podudaraju - prijava uspešna
            if ($row_login['user_type'] === 'client') {
                echo "sesija pocela kao klijent";
                 
                $_SESSION['loginClient'] = "1";
                $_SESSION['type'] = 'client';
                $_SESSION['emailClient'] = $email;
                header("Location: index.html"); 
                
            } elseif ($row_login['user_type'] === 'clinics') {
                echo "sesija pocela kao klinika"; 
                $_SESSION['loginClinics'] = "1";
                $_SESSION['type'] = 'clinics';
                $_SESSION['emailClinics'] = $email;
                header("Location: index.html"); 
            }
            
        } else {
            echo "<h1> Login failed. Invalid email or password PRVI.</h1>"; 
            session_destroy();
        }
    } else {
        echo "<h1> Login failed. Invalid email or password.</h1>"; //prikazuje ovo umesto da radi js validaciju
    }
    // Zatvaranje stmt_login objekta
    $stmt_login->close();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');
if ((isset($_SESSION['loginClient']) && $_SESSION['loginClient'] != '')) { 
    $clientLogged = true;
    echo json_encode(['data' => ['loginClient' => 1]]);
   
} elseif ((isset($_SESSION['loginClinics']) && $_SESSION['loginClinics'] != '')) {  //ako je klinika
    $clinicLogged = true; 
   
    echo json_encode(['data' => ['loginClinics' => 1]]);
   
} else { //ako je izlogovan
    echo json_encode(['status' => 'error', 'message' => 'Invalid session state']); //ovo se prikaze
    
}
}

// Close the connection
$conn->close();
?>
