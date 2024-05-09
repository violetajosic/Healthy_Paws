<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "addapointment";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from POST request
$diseaseName = $_POST['catalogDiseaseName'];
$appointmentDate = $_POST['catolgDate'];
$symptoms = $_POST['catalogSympt'];
$therapy = $_POST['catalogTherapy'];
$doctorInfo = $_POST['catalogDoctor'];
$clinicIDInfo = $_POST['catalogClinicID'];

// Prepare and execute SQL statement
$sql = "INSERT INTO appointments (disease_name, appointment_date, symptoms, therapy, doctor_info, clinic_id)
        VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssi", $diseaseName, $appointmentDate, $symptoms, $therapy, $doctorInfo, $clinicIDInfo);
if ($stmt->execute()) {
    echo "uspesno sacuvano php";
} else {
    echo "Error: " . $stmt->error;
}

// Close connection
$stmt->close();
$conn->close();
?>