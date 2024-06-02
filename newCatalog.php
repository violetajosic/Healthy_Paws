<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$database = "mnc";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['catalog_id']) && is_numeric($_GET['catalog_id'])) {
    $catalog_id = $_GET['catalog_id'];
    $_SESSION['catalog_id'] = $catalog_id;

    $sql = "SELECT * FROM pets WHERE id = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("i", $catalog_id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 1) {
            $catalogData = $result->fetch_assoc();
            $response = ['status' => 'success', 'data' => $catalogData];
        } else {
            $response = ['status' => 'error', 'message' => 'Catalog not found'];
        }

        $stmt->close();
    } else {
        $response = ['status' => 'error', 'message' => 'Error preparing SQL query: ' . $conn->error];
    }
} else {
    $response = ['status' => 'error', 'message' => 'Invalid catalog ID'];
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($response);
?>

