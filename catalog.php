<?php
//catalog appointments

$servername = "localhost";
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password
$database = "addapointment";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from POST request
$catalogVetID = $_POST['catalogVetID'];
$diseaseName = $_POST['catalogDiseaseName'];
$symptoms = $_POST['catalogSympt'];
$therapy = $_POST['catalogTherapy'];
$doctorInfo = $_POST['catalogDoctor'];
$clinicIDInfo = $_POST['catalogClinicID'];

// Prepare and execute SQL statement
$sql = "INSERT INTO appointments (catalog_id, disease_name, appointment_date, symptoms, therapy, doctor_info, clinic_id)
        VALUES (?, ?, CURRENT_DATE(), ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("issssi",$catalogVetID, $diseaseName, $symptoms, $therapy, $doctorInfo, $clinicIDInfo);
if ($stmt->execute()) {
    // Redirect back to the page
    header("Location: catalog.html");
    exit();
} else {
    // Return error message
    echo json_encode(['error' => 'Error saving data']);
}

// Close connection
$stmt->close();
$conn->close();
?>
