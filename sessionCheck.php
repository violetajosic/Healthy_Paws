<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');
    if ((isset($_SESSION['loginClient']) && $_SESSION['loginClient'] != '')) { 
        $clientLogged = true;
        echo json_encode(['data' => ['loginClient' => 1]]);
    } elseif ((isset($_SESSION['loginClinics']) && $_SESSION['loginClinics'] != '')) {
        $clinicLogged = true;
        echo json_encode(['data' => ['loginClinics' => 1]]);
    } else {
        echo json_encode(['message' => 'User is not logged in']); 
    }
}
?>
