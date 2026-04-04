<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['fullName'] ?? 'Not Provided';
    $mobile = $_POST['mobileNumber'] ?? 'Not Provided';
    $subject = $_POST['subject'] ?? 'Contact Inquiry';
    $email = $_POST['email'] ?? 'Not Provided';
    $message = $_POST['message'] ?? 'No message provided';

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // Set the SMTP server to send through
        $mail->SMTPAuth   = true;
        $mail->Username   = 'northroadwaysservice@gmail.com'; // SMTP username
        $mail->Password   = 'your_app_password'; // SMTP password (use App Password for Gmail)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        //Recipients
        $mail->setFrom('northroadwaysservice@gmail.com', 'North Roadways Contact Form');
        $mail->addAddress('northroadwaysservice@gmail.com');
        $mail->addReplyTo($email, $name);

        //Content
        $mail->isHTML(true);
        $mail->Subject = "New Contact Inquiry: " . $subject;
        
        $mailBody = "
        <h2>New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> {$name}</p>
        <p><strong>Mobile Number:</strong> {$mobile}</p>
        <p><strong>Email Address:</strong> {$email}</p>
        <p><strong>Subject:</strong> {$subject}</p>
        <p><strong>Message:</strong><br>{$message}</p>
        ";

        $mail->Body    = $mailBody;
        $mail->AltBody = strip_tags($mailBody);

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Message has been sent"]);
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>
