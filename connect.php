<?php
$name = $_POST['name'];
$Email = $_POST['Email'];
$password = $_POST['password'];
$Phone = $_POST['Phone'];
$Reg = $_POST['Reg'];

// database connection
if (!empty($name) || !empty($Email) || !empty($password) || !empty($Phone) || !empty($Reg)) {
    $host = "localhost";
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'database1';

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ')' . mysqli_connect_error());
    } else {
        $SELECT = "SELECT email from entrydetails WHERE Email = ? LIMIT 1";
        $INSERT = "INSERT Into entrydetails(name,Email,password,Phone,Reg) values(?,?,?,?,?)";
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $Email);
        $stmt->bind_result($Email);
        $stmt->store_result();
        $rnum = $stmt->num_rows();

        if ($rnum == 0) {
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("sssis", $name, $Email, $password, $Phone, $Reg);
            $stmt->execute();
            echo "New user registered Succesfully";
        } else {
            echo "Someone Already Registered";
        }
        $stmt->close();
        $conn->close();
    }
} else {
    echo "All Fields are required";
    die();
}

?>