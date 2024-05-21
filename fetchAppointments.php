<?php
// Fetch appointments from the database
$servername = "localhost";
$username = "root";
$password = "";
$database = "addapointment";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM appointments";
$result = $conn->query($sql);

$appointments = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $appointments[] = $row;
    }
}

$conn->close();

echo json_encode($appointments);
?>
