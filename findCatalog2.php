<?php
// Ensure session is started only once
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$servername = "localhost";
$username = "root";
$password = "";
$database1 = "healthypawsusers";
$database2 = "mnc";

// Create connection to healthypawsusers database
$conn1 = new mysqli($servername, $username, $password, $database1);

if ($conn1->connect_error) {
    die("Connection failed to healthypawsusers: " . $conn1->connect_error);
}

// Create connection to mnc database
$conn2 = new mysqli($servername, $username, $password, $database2);

if ($conn2->connect_error) {
    die("Connection failed to mnc: " . $conn2->connect_error);
}

$response = [];
$clientLogged = false;
$clinicLogged = false;

if (isset($_SESSION['loginClient']) && $_SESSION['loginClient']!= '') { 
    $clientLogged = true;
} elseif (isset($_SESSION['loginClinics']) && $_SESSION['loginClinics']!= '') {
    $clinicLogged = true;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');
    if ($clientLogged) {
        $response['status'] = 'success';
        $response['data']['loginClient'] = 1;
    } elseif ($clinicLogged) {
        $response['status'] = 'success';
        $response['data']['loginClinics'] = 1;
    } else {
        $response['status'] = 'error';
        $response['message'] = 'User is not logged in';
    }
} else {
    if (isset($_POST['findID'])) {
        $id = $_POST['findID'];

        if ($clientLogged) { //udje u ove petlje
            $sql = "SELECT * FROM mnc.pets WHERE id =?";
            $stmt = $conn2->prepare($sql);
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $response['success'] = true;
                $response['data'] = [
                    'image' => $row['image'],
                    'pet_name' => $row['pet_name'],
                    'owner_email' => $row['owner_email'],
                    'species' => $row['species'],
                    'pet_age' => $row['pet_age'],
                    'age_converted' => $row['age_converted']
                ];
            } else {
                $response['error'] = 'Catalog does not exist'; //da ovo kada nema id kataloga
            }
        } elseif ($clinicLogged) {
            $sql = "SELECT * FROM mnc.pets WHERE id =?";
            $stmt = $conn2->prepare($sql);
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $response['success'] = true;
                $response['data'] = [
                    'image' => $row['image'],
                    'pet_name' => $row['pet_name'],
                    'owner_email' => $row['owner_email'],
                    'species' => $row['species'],
                    'pet_age' => $row['pet_age'],
                    'age_converted' => $row['age_converted']
                ];
            } else {
                $response['error'] = 'Catalog does not exist'; //da ovo kada nema id kataloga
            }
        } else {
            $response['error'] = 'No one is logged in.';
        }
    } else {
        $response['error'] = 'ID not provided';
    }
}

echo json_encode($response);

// Close connections
$conn1->close();
$conn2->close();
?>
