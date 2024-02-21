<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "healthypawsusers";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}

// Endpoint for client registration
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['register-client'])) {
    $email = $_POST['myemail'];
    $mypassword = $_POST['mypassword'];



    // SQL query to add client to the table
    $sql = "INSERT INTO users (email, password, user_type) VALUES (?, ?, 'client')";
    $stmt = $conn->prepare($sql);

    // Check if the prepare was successful
    if (!$stmt) {
        die("Error preparing SQL query: " . $conn->error);
    }

    // Bind parameters
    $stmt->bind_param("ss", $email, $mypassword);

    // Execute the statement
    if ($stmt->execute()) {
        header("Location: log.html"); //ako prodje sign up odvedi ga na log in
        exit(); //zavrsi ovu metodu
    } else {
        echo "Error executing SQL query: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}


// LOG IN
//dodati remember me
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

        // Debugging statements for password verification
        echo "Stored Password (length: " . strlen($row_login['password']) . "): " . $row_login['password'];
        echo "Provided Password (length: " . strlen($my2password) . "): " . $my2password;


        $storedPassword = $row_login['password'];
        // Direct comparison for debugging purposes (remove in production)
        if ($my2password === $storedPassword) {
            // Lozinke se podudaraju - prijava uspešna
            session_start();
            echo "sesija pocela";
            $_SESSION['login'] = "1";
            $_SESSION['email'] = $email;
            header("Location: index.html");
            exit();
        } else {
            echo "<h1> Login failed. Invalid email or password PRVI.</h1>"; //ovo se prikaze
        }
    } else {
        echo "<h1> Login failed. Invalid email or password.</h1>";
    }

    // Zatvaranje stmt_login objekta
    $stmt_login->close();
}






// Endpoint for clinic registration
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['register-clinics'])) {
    echo "clinics";
    $email = $_POST['myemail'];
    $mypassword = $_POST['mypassword'];
    $clinicsId = $_POST['clinics_id'];

    // SQL query to add clinic to the table
    $sql = "INSERT INTO users (email, password, clinics_id, user_type) VALUES (?, ?, ?, 'clinics')";
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

// Close the connection
$conn->close();
?>
