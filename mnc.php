<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$database = "mnc";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['mncButtonFunction'])) {
    $petName = $_POST['petName'];
    $ownerEmail = $_POST['ownerEmail'];
    $speciesName = $_POST['speciesName'];
    $petAgeInput = $_POST['petAge'];

    if (strtolower($speciesName) !== "cat") {
        if ($petAgeInput < 2) {
            $mncConverted = $petAgeInput * 10.5;
        } else {
            $mncConverted = 2 * 10.5 + ($petAgeInput - 2) * 4;
        }
    } else {
        $mncConverted = 15 + 9 * ($petAgeInput - 1);
    }

    if (isset($_FILES["customFile1"]) && $_FILES["customFile1"]["error"] == 0) {
        $targetDirectory = "img/mncUploads/";
        // $allowTypes = array('jpg','png','jpeg','gif'); 
        $targetFile = $targetDirectory . basename($_FILES["customFile1"]["name"]);

        if (move_uploaded_file($_FILES["customFile1"]["tmp_name"], $targetFile)) {
            $imagePath = $targetFile;

            $sql = "INSERT INTO pets (image, pet_name, owner_email, species, pet_age, age_converted)
                VALUES ('$imagePath', '$petName', '$ownerEmail', '$speciesName', $petAgeInput, $mncConverted)";

            if ($conn->query($sql) === TRUE) { 
                // Get the ID of the last inserted row
                $last_id = $conn->insert_id;
                $_SESSION['last_id'] = $last_id; // Store last ID in session
                header("Location: newCatalog.html"); // Redirect to newCatalog.html
                exit();
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        } else {
            echo "Upload failed.";
        }
    } else {
        echo "File upload error: " . $_FILES["customFile1"]["error"];
    }
}

$conn->close();
?>

