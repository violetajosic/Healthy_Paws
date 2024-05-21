<?php
//catalog appointments
$servername = "localhost";
$username = "root";
$password = "";
$database = "addapointment";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from POST request
$diseaseName = $_POST['catalogDiseaseName'];
$symptoms = $_POST['catalogSympt'];
$therapy = $_POST['catalogTherapy'];
$doctorInfo = $_POST['catalogDoctor'];
$clinicIDInfo = $_POST['catalogClinicID'];

$appointment_date = date('Y-m-d');

// Prepare and execute SQL statement
$sql = "INSERT INTO appointments (disease_name, appointment_date, symptoms, therapy, doctor_info, clinic_id)
        VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssi", $diseaseName, $appointment_date, $symptoms, $therapy, $doctorInfo, $clinicIDInfo);
if ($stmt->execute()) {
    // Return JSON response
    echo json_encode([
        'diseaseName' => $diseaseName,
        'symptoms' => $symptoms,
        'therapy' => $therapy,
        'doctorInfo' => $doctorInfo,
        'clinicIDInfo' => $clinicIDInfo,
        'date' => date('d.m.Y') // Format the current date
    ]);
} else {
    // Return error message
    echo json_encode(['error' => 'Error saving data']);
}

// Close connection
$stmt->close();
$conn->close();
?>
