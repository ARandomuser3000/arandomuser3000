<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer/Exception.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/PHPMailer.php';

$mail = new PHPMailer(true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $asunto = $_POST['asunto'];
  $mensaje = $_POST['mensaje'];

  try {
    $mail->isSMTP();
    $mail->Host = 'mail.privateemail.com'; // Reemplaza con la dirección del servidor SMTP de tu proveedor de correo
    $mail->SMTPAuth = true;
    $mail->Username = 'noreply@alfredo-ec.com'; // Reemplaza con tu dirección de correo electrónico
    $mail->Password = '185022310678910'; // Reemplaza con tu contraseña de correo electrónico
    $mail->SMTPSecure = 'tls'; // Opcional: Si el servidor SMTP utiliza SSL, cambia 'tls' por 'ssl'
    $mail->Port = 587; // Reemplaza con el puerto SMTP adecuado según la configuración de tu proveedor de correo

    $mail->setFrom('noreply@alfredo-ec.com', 'noreply'); // Reemplaza con tu dirección de correo electrónico y tu nombre
    $mail->addAddress($correo, $nombre); // Agrega la dirección de correo del usuario como destinatario

    $mail->isHTML(false);
    $mail->Subject = 'Nuevo Ticket de Soporte';
    $mail->Body    = "Hola " . $nombre . ",\n\nGracias por crear un nuevo ticket de soporte. A continuación se muestra la información de tu ticket:\n\nNombre: " . $nombre . "\nCorreo electrónico: " . $correo . "\nAsunto: " . $asunto . "\nMensaje: " . $mensaje;

    $mail->send();
    echo "Correo enviado correctamente.";
  } catch (Exception $e) {
    echo "Error al enviar el correo: " . $mail->ErrorInfo;
  }
}
?>
