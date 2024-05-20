<?php
session_start();

if (isset($_SESSION['last_id'])) {
    echo $_SESSION['last_id'];
} else {
    echo '';
}
?>
