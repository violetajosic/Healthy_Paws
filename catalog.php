<?php
//catalog appointments

$servername = "localhost";
$username = "root";
$password = "";
$database = "addapointment";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$catalogVetID = $_POST['catalogVetID'];
$diseaseName = $_POST['catalogDiseaseName'];
$symptoms = $_POST['catalogSympt'];
$therapy = $_POST['catalogTherapy'];
$doctorInfo = $_POST['catalogDoctor'];
$clinicIDInfo = $_POST['catalogClinicID'];

$sql = "INSERT INTO appointments (catalog_id, disease_name, appointment_date, symptoms, therapy, doctor_info, clinic_id)
        VALUES (?, ?, CURRENT_DATE(), ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("issssi",$catalogVetID, $diseaseName, $symptoms, $therapy, $doctorInfo, $clinicIDInfo);
if ($stmt->execute()) {
    header("Location: catalog.html");
    exit();
} else {
    echo json_encode(['error' => 'Error saving data']);
}

$stmt->close();
$conn->close();
?>
