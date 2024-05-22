<?php
//za hvatanje i prikazivanje catalog id-ja na profilu kod onog klijenta ciji se email iz healthypawsusers poklapa sa owner_email iz mnc baze
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$database1 = "healthypawsusers";
$database2 = "mnc";

// Create connection to healthypawsusers database
$conn1 = new mysqli($servername, $username, $password, $database1);

if ($conn1->connect_error) {
    die("Connection failed: " . $conn1->connect_error);
}

// Create connection to mnc database
$conn2 = new mysqli($servername, $username, $password, $database2);

if ($conn2->connect_error) {
    die("Connection failed: " . $conn2->connect_error);
}

// Fetch email of the client from session
$email = $_SESSION['emailClient'];

// Prepare and execute SQL query to fetch catalog IDs from mnc database where owner_email matches client's email
$sql = "SELECT id FROM pets WHERE owner_email = ?";
$stmt = $conn2->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

$catalogIDs = [];
while ($row = $result->fetch_assoc()) {
    $catalogIDs[] = $row['id'];
}

if (count($catalogIDs) > 0) {
    echo implode(", ", $catalogIDs);
} else {
    echo "No catalog IDs found";
}

$stmt->close();
$conn1->close();
$conn2->close();
?>
