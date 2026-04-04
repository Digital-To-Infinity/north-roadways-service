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
    $subject = $_POST['subject'] ?? 'Service Quote Request';
    $email = $_POST['email'] ?? 'Not Provided';
    $message = $_POST['message'] ?? 'No additional details provided';
    $vehicle = $_POST['vehicle'] ?? 'Not specified';

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; 
        $mail->SMTPAuth   = true;
        $mail->Username   = 'northroadwaysservice@gmail.com'; 
        $mail->Password   = 'your_app_password'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        //Recipients
        $mail->setFrom('northroadwaysservice@gmail.com', 'North Roadways Quote Form');
        $mail->addAddress('northroadwaysservice@gmail.com');
        $mail->addReplyTo($email, $name);

        //Content
        $mail->isHTML(true);
        $mail->Subject = "New Service Quote Request: " . $vehicle;
        
        $mailBody = "
        <h2 style='color: #4f46e5;'>New Service Quote Request</h2>
        <p><strong>Selected Vehicle:</strong> <span style='font-weight: bold;'>{$vehicle}</span></p>
        <p><strong>Full Name:</strong> {$name}</p>
        <p><strong>Mobile Number:</strong> {$mobile}</p>
        <p><strong>Email Address:</strong> {$email}</p>
        <p><strong>Inquiry Subject:</strong> {$subject}</p>
        <p><strong>Details/Message:</strong><br>{$message}</p>
        <hr>
        <p style='font-size: 12px; color: #666;'>This request was sent from the services page quote popup.</p>
        ";

        $mail->Body    = $mailBody;
        $mail->AltBody = strip_tags($mailBody);

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Quote request has been sent successfully"]);
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>
