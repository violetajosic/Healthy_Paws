<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mnc";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

if (isset($_POST['findID'])) {
    $id = $_POST['findID'];

    $sql = "SELECT * FROM pets WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    
    //$catalog_id = $_GET['catalog_id'];
    //$response = ['status' => 'success', 'data' => array_merge($userData, ['catalog_id' => $catalog_id])];
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode([
            'success' => true,
            'image' => $row['image'], //treba da se izmeni
            'pet_name' => $row['pet_name'],
            'owner_email' => $row['owner_email'],
            'species' => $row['species'],
            'pet_age' => $row['pet_age'],
            'age_converted' => $row['age_converted']
        ]);
    } else {
        echo json_encode(['error' => 'Catalog with ID ' . $id . ' not found']);
    }

    $stmt->close();
} else {
    echo json_encode(['error' => 'ID not provided']);
}

$conn->close();
?>
