<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "mnc";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['mncButtonFunction'])) {
    // Assuming you have already sanitized and validated your inputs
    $petName = $_POST['petName'];
    $ownerName = $_POST['ownerName'];
    $speciesName = $_POST['speciesName'];
    $petAgeInput = $_POST['petAge'];
    $mncConverted = $_POST['mncConverted'];

    // File upload handling
    if (isset($_FILES["customFile1"]) && $_FILES["customFile1"]["error"] == 0) {
        $targetDirectory = "img/uploads";
        $targetFile = $targetDirectory . basename($_FILES["customFile1"]["name"]);

        if (move_uploaded_file($_FILES["customFile1"]["tmp_name"], $targetFile)) {
            echo "File is valid, and was successfully uploaded.";
            $imagePath = $targetFile;  // Use the uploaded file path in the database

            $sql = "INSERT INTO pets (image, pet_name, owner_name, species, pet_age, age_converted)
                VALUES ('$imagePath', '$petName', '$$ownerName', '$speciesInput', $petAgeInput, $mncConverted)";

            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        } else {
            echo "Upload failed.";
        }
    } else {
        echo "File not found or an error occurred."; //ovo se prikaze
    }
}

$conn->close();
?>
