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
$userEmail = '';

if (isset($_SESSION['loginClient']) && $_SESSION['loginClient']!= '') { 
    $clientLogged = true;
    $userEmail = $_SESSION['emailClient'];
} elseif (isset($_SESSION['loginClinics']) && $_SESSION['loginClinics']!= '') {
    $clinicLogged = true;
    $userEmail = $_SESSION['emailClinics'];
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
            $response['success'] = true;
            $response['logged']['loginClient'] = 1;
            
            if ($result && $result->num_rows > 0)  {
                $row = $result->fetch_assoc();
                $response['success'] = true;
                $response['data'] = [
                    'image' => $row['image'],
                    'pet_name' => $row['pet_name'],
                    'owner_email' => $row['owner_email'],
                    'species' => $row['species'],
                    'pet_age' => $row['pet_age'],
                    'age_converted' => $row['age_converted'],
                    'userData' => [ 
                        'id' => $row['id']
                    ]
                ];
            } else {
                $response['error'] = 'Catalog does not exist'; //da ovo kada nema id kataloga
                $response['success'] = false;
            }

            //za poklapanje id-jeva : ukoliko se uneti id poklapa sa id iz kolone id u mnc.pets gde se nalazi owner_email sto je email ulogovanog klijenta
            $userEmail = $row['owner_email'];
            $stmt2 = $conn1->prepare("SELECT id FROM mnc.pets WHERE owner_email = ?");
            $stmt2->bind_param("s", $userEmail);
            $stmt2->execute();
            $result2 = $stmt2->get_result();

            if ($result2->num_rows > 0) {
                $userData = $result2->fetch_assoc();
                $response['data'] = $userData;
            } else {
                $response = ['error' => 'User not found'];
            }

            $stmt2->close();

        } elseif ($clinicLogged) {
            $sql = "SELECT * FROM mnc.pets WHERE id =?";
            $stmt = $conn2->prepare($sql);
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            $response['success'] = true;
            $response['logged']['loginClinics'] = 1;
            
            if($result && $result->num_rows > 0)  {
                $row = $result->fetch_assoc();
                $response['success'] = true;
                $response['data'] = [
                    'image' => $row['image'],
                    'pet_name' => $row['pet_name'],
                    'owner_email' => $row['owner_email'],
                    'species' => $row['species'],
                    'pet_age' => $row['pet_age'],
                    'age_converted' => $row['age_converted'],
                    'userData' => [ 
                        'id' => $row['id']
                    ]
                ];
            } else {
                $response['error'] = 'Catalog does not exist'; //da ovo kada nema id kataloga
                $response['success'] = false;
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
