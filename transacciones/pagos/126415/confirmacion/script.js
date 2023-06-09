function enviarMensajeDiscord(mensaje) {
    var webhookURL = 'https://discord.com/api/webhooks/1116094610926751925/V1oPhvyBp6mkzzhJOvS--Rw8ArjcpJ3mbpSw1qZDEtVO9gVG6G2z84CN1B1gbwM4ml2i'; // Reemplaza con la URL de tu webhook de Discord

    axios.post(webhookURL, { content: mensaje })
      .then(function (response) {
        console.log('Mensaje enviado a Discord:', response.data);
      })
      .catch(function (error) {
        console.error('Error al enviar el mensaje a Discord:', error);
      });
  }

  function aceptar() {
    var button = document.getElementById('accept-button');
    button.disabled = true;

    var iconContainer = document.getElementById('icon-container');
    var icon = document.getElementById('icon');
    icon.src = "https://icons.veryicon.com/png/o/miscellaneous/selling-wine-net/loading-42.png";

    iconContainer.classList.add('loader-spin');

    var confirmationText = document.getElementById('confirmation-text');
    confirmationText.innerText = "¡Un último paso! Su pago está siendo procesado.";

    var price = document.getElementById('price');
    price.style.display = "none";

    var buttonContainer = document.getElementById('button-container');
    buttonContainer.style.display = "none";

    var dotCount = 0;
    var intervalId = setInterval(function () {
      dotCount++;
      var dots = "";
      for (var i = 0; i < dotCount; i++) {
        dots += ".";
      }
      confirmationText.innerText = "¡Un último paso! Su pago está siendo procesado" + dots;
      if (dotCount === 3) {
        dotCount = 0;
      }
    }, 500);

    setTimeout(function () {
      clearInterval(intervalId);
      icon.src = "https://cdn-icons-png.flaticon.com/512/5610/5610944.png";
      confirmationText.innerText = "Completado";
      iconContainer.classList.remove('loader-spin');
      price.style.display = "block";
      price.innerText = "¡Listo! Se ha completado tu compra y ya puedes disfrutar de los beneficios.\nNo olvides tomar una captura de pantalla y enviársela a tu proveedor.\nID de pago: (#126415)";
      var mensaje = "¡Listo! Se ha completado tu compra y ya puedes disfrutar de los beneficios.\nNo olvides tomar una captura de pantalla y enviársela a tu proveedor.\nID de pago: (#126415)";
      enviarMensajeDiscord(mensaje);
    }, 10000);
  }

  function cancelar() {
    var button = document.getElementById('accept-button');
    button.disabled = true;

    var iconContainer = document.getElementById('icon-container');
    var icon = document.getElementById('icon');
    icon.src = "https://icons.veryicon.com/png/o/miscellaneous/selling-wine-net/loading-42.png";

    iconContainer.classList.add('loader-spin');

    var confirmationText = document.getElementById('confirmation-text');
    confirmationText.innerText = "¡Espere! Su pago está siendo cancelado.";

    var price = document.getElementById('price');
    price.style.display = "none";

    var buttonContainer = document.getElementById('button-container');
    buttonContainer.style.display = "none";

    var dotCount = 0;
    var intervalId = setInterval(function () {
      dotCount++;
      var dots = "";
      for (var i = 0; i < dotCount; i++) {
        dots += ".";
      }
      confirmationText.innerText = "¡Espere! Su pago está siendo cancelado" + dots;
      if (dotCount === 3) {
        dotCount = 0;
      }
    }, 500);

    setTimeout(function () {
      clearInterval(intervalId);
      icon.src = "https://www.freeiconspng.com/thumbs/error-icon/error-icon-4.png";
      confirmationText.innerText = "Cancelado";
      iconContainer.classList.remove('loader-spin');
      price.style.display = "block";
      price.innerText = "¡Listo! Se ha cancelado el pago, no es necesario hacer nada más.\nID de pago: (#126415)";
      var mensaje = "¡Listo! Se ha cancelado el pago, no es necesario hacer nada más.\nID de pago: (#126415)";
      enviarMensajeDiscord(mensaje);
    }, 4000);
  }
