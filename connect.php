<?php
$name = $_POST['name'];
$Email = $_POST['Email'];
$password = $_POST['password'];
$Phone = $_POST['Phone'];
$Reg = $_POST['Reg'];

// database connection

$conn = new mysqli('localhost', 'root', '', 'database1');
if (!$conn) {
    die('Connection Failed: ' . $conn->connect_error);
}
if ($_POST['submit']) {
    $stmt = $conn->prepare("INSERT INTO entrydetails(name,Email,password,Phone,Reg)
    VALUES($name,$Email,$password,$Phone,$Reg)");
    $stmt->bind_param("sssii", $name, $Email, $password, $Phone, $Reg);
    $stmt->execute();
    echo "Logged In succesfully";
    $stmt->close();
    $conn->close();
}
?>