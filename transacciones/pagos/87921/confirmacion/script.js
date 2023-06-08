var numero = Math.floor(Math.random() * 2) + 1;
function enviarMensajeDiscord(mensaje) {
    // URL del webhook de Discord
    var webhookUrl = "https://discord.com/api/webhooks/1116094610926751925/V1oPhvyBp6mkzzhJOvS--Rw8ArjcpJ3mbpSw1qZDEtVO9gVG6G2z84CN1B1gbwM4ml2i";

    // Objeto de datos para enviar al webhook
    var data = {
        content: mensaje
    };

    // Configuración de la solicitud HTTP
    var request = new XMLHttpRequest();
    request.open("POST", webhookUrl, true);
    request.setRequestHeader("Content-type", "application/json");

    // Envío de la solicitud
    request.send(JSON.stringify(data));
}

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


if (numero === 1) {
  icon.src = "https://static.vecteezy.com/system/resources/previews/001/208/666/original/banana-png.png";
  price.innerText = "[404] Página no encontrada o inexistente. \n Esta página no fue encontrada, por favor, vuelve a pedir el URL o intenta con otro pedido. \n Cuentas con el apoyo del platano de la empatía."
} else if (numero === 2) {
  icon.src = "https://static.vecteezy.com/system/resources/previews/017/172/383/original/warning-message-concept-represented-by-exclamation-mark-icon-exclamation-symbol-in-circle-png.png";
  price.innerText = "[404] Página no encontrada o inexistente. \n Esta página no fue encontrada, por favor, vuelve a pedir el URL o intenta con otro pedido."
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
    }, 300);

    setTimeout(function () {
        clearInterval(intervalId);
        icon.src = "https://cdn-icons-png.flaticon.com/512/5610/5610944.png";
        confirmationText.innerText = "Completado";
        iconContainer.classList.remove('loader-spin');
        price.style.display = "block";
        price.innerText = "¡Listo! Se ha completado tu compra y ya puedes disfrutar de los beneficios.\nNo olvides tomar una captura de pantalla y enviársela a tu proveedor.\nID de pago: (#87921)";

        // Envío del mensaje a Discord
        var mensajeDiscord = "Se ha aceptado un pago.";
        enviarMensajeDiscord(mensajeDiscord);
    }, 15000);
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
    }, 300);

    setTimeout(function () {
        clearInterval(intervalId);
        icon.src = "https://www.freeiconspng.com/thumbs/error-icon/error-icon-4.png";
        confirmationText.innerText = "Cancelado";
        iconContainer.classList.remove('loader-spin');
        price.style.display = "block";
        price.innerText = "¡Listo! Se ha cancelado el pago, no es necesario hacer nada más.\nID de pago: (#87921)";

        // Envío del mensaje a Discord
        var mensajeDiscord = "Se ha cancelado un pago.";
        enviarMensajeDiscord(mensajeDiscord);
    }, 4000);
}
