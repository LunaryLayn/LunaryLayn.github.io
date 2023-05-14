<?php

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set the recipient email address
$to = "hupogo2000@protonmail.com";

// Set the email subject
$subject = "New message from $name ($email)";

// Set the email message
$email_message = "Name: $name\n\nEmail: $email\n\nMessage: $message";

// Send the email
$headers = "From: $email";
mail($to, $subject, $email_message, $headers);

?>
