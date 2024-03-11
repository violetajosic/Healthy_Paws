<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "addApointment";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve input values
$diseaseName = $_POST['diseaseName'];
$appointmentDate = $_POST['appointmentDate'];
$symptoms = $_POST['symptoms'];
$therapy = $_POST['therapy'];
$doctorInfo = $_POST['doctorInfo'];
$clinicIDInfo = $_POST['clinicIDInfo'];

// Insert data into the appointments table
$sql = "INSERT INTO appointments (disease_name, appointment_date, symptoms, therapy, doctor_info, clinicIDInfo)
        VALUES ('$diseaseName', '$appointmentDate', '$symptoms', '$therapy', '$doctorInfo', '$clinicIDInfo')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>