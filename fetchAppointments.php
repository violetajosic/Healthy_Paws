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

// Check if catalog_id is provided in the request
$catalog_id = isset($_POST['catalog_id']) ? $_POST['catalog_id'] : '';

if ($catalog_id !== '') {
    $sql = "SELECT * FROM appointments WHERE catalog_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $catalog_id);
    $stmt->execute();
    $result = $stmt->get_result();
} else {//treba da da neku gresku a ne da pretrazi sve
    $sql = "SELECT * FROM appointments";
    $result = $conn->query($sql);
}

$appointments = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $appointments[] = $row;
    }
}

$conn->close();

echo json_encode($appointments);
?>
