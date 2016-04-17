<?php
// set up the connection variables
$db_name = 'angular_test_peoplesoft';
$hostname = 'localhost';
$username = 'rpeterson22';
$pass = 'ballin';
try {
	// connect to the database
	$dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $pass);

} catch (PDOException $e) {
	$error_message = $e->getMessage();
	echo "Could Not Connect to the database";
	exit();
}

?>