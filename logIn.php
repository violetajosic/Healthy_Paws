<?php
session_start();
require_once 'connection.php';

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
$conn->close();
?>