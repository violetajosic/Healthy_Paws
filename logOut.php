<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Content-Type: text/plain");
// LOG OUT
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['logOut'])) {
    session_start(); 
    unset($_SESSION);
    session_destroy();
    session_write_close();
    die("Logout successful"); //radi sve ali ovo ne dobijem nigde i nema ga u networku
}

?>