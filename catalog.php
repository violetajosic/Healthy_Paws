<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "addApointment";

//konekcija
$conn = new mysqli($servername, $username, $password, $database);

//provera konekcije
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$diseaseName = $_POST['catalogDiseaseName'];
$appointmentDate = $_POST['catolgDate'];
$symptoms = $_POST['catalogSympt'];
$therapy = $_POST['catalogTherapy'];
$doctorInfo = $_POST['catalogDoctor'];
$clinicIDInfo = $_POST['catalogClinicID'];

$sql = "INSERT INTO appointments (disease_name, appointment_date, symptoms, therapy, doctor_info, clinic_id)
        VALUES ('$diseaseName', '$appointmentDate', '$symptoms', '$therapy', '$doctorInfo', '$clinicIDInfo')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>