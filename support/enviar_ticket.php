<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer/Exception.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/PHPMailer.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
  
    $mail = new PHPMailer(true);
  
    try {
      $mail->isSMTP();
      $mail->Host = 'smtp.example.com'; // Reemplaza con la dirección del servidor SMTP de tu proveedor de correo
      $mail->SMTPAuth = true;
      $mail->Username = 'tu_correo@example.com'; // Reemplaza con tu dirección de correo electrónico
      $mail->Password = 'tu_contraseña'; // Reemplaza con tu contraseña de correo electrónico
      $mail->SMTPSecure = 'tls'; // Opcional: Si el servidor SMTP utiliza SSL, cambia 'tls' por 'ssl'
      $mail->Port = 587; // Reemplaza con el puerto SMTP adecuado según la configuración de tu proveedor de correo
  
      $mail->setFrom('tu_correo@example.com', 'Tu Nombre'); // Reemplaza con tu dirección de correo electrónico y tu nombre
      $mail->addAddress($correo, $nombre); // Agrega la dirección de correo del usuario como destinatario
  
      $mail->isHTML(false);
      $mail->Subject = 'Nuevo Ticket de Soporte';
      $mail->Body    = "Hola " . $nombre . ",\n\nGracias por crear un nuevo ticket de soporte. A continuación se muestra la información de tu ticket:\n\nNombre: " . $nombre . "\nCorreo electrónico: " . $correo . "\nAsunto: " . $asunto . "\nMensaje: " . $mensaje;
  
      $mail->send();
      echo "Correo enviado correctamente.";
  
      // Envío a Webhook de Discord
      $webhookUrl = 'https://discord.com/api/webhooks/1116094610926751925/V1oPhvyBp6mkzzhJOvS--Rw8ArjcpJ3mbpSw1qZDEtVO9gVG6G2z84CN1B1gbwM4ml2i'; // Reemplaza con la URL de tu webhook de Discord
      $webhookData = [
        'content' => "Nuevo ticket de soporte:\n\nNombre: $nombre\nCorreo electrónico: $correo\nAsunto: $asunto\nMensaje: $mensaje"
      ];
  
      $ch = curl_init($webhookUrl);
      curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($webhookData));
      curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
      curl_setopt($ch, CURLOPT_HEADER, 0);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  
      $response = curl_exec($ch);
      curl_close($ch);
  
      if ($response === false) {
        echo "Error al enviar la solicitud al webhook de Discord.";
      } else {
        echo "Ticket enviado correctamente.";
      }
    } catch (Exception $e) {
      echo "Error al enviar el correo: " . $mail->ErrorInfo;
    }
  }
  ?>