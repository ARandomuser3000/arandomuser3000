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
    price.innerText = "Pago confirmado con éxito";
    var completedContainer = document.getElementById('completed-container');
    completedContainer.style.display = "block";

    enviarMensajeDiscord("¡Se ha confirmado un nuevo pago con Id: (#126415)!");
  }, 5000);
}

function cancelar() {
  var error = document.getElementById('error');
  error.style.display = "block";
}

function handleFileChange() {
  var fileInput = document.getElementById('file-input');
  var uploadButton = document.getElementById('upload-button');

  if (fileInput.files.length > 0) {
    uploadButton.disabled = false;
  } else {
    uploadButton.disabled = true;
  }
}

function handleFileUpload() {
  var fileInput = document.getElementById('file-input');
  var file = fileInput.files[0];

  var formData = new FormData();
  formData.append('file', file);

  var request = new XMLHttpRequest();
  request.open('POST', 'https://api.example.com/upload', true);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var fileUploadSuccess = document.getElementById('file-upload-success');
      fileUploadSuccess.style.display = "block";
      fileUploadSuccess.innerText = "Se ha subido el archivo correctamente y lo estamos examinando";

      setTimeout(function () {
        fileUploadSuccess.style.display = "none";
      }, 3000);
    } else {
      var fileUploadSuccess = document.getElementById('file-upload-success');
      fileUploadSuccess.style.display = "block";
      fileUploadSuccess.innerText = "Hubo un problema al enviar el archivo, recarga la página e intentelo nuevamente";

      setTimeout(function () {
        fileUploadSuccess.style.display = "none";
      }, 3000);
    }
  };
  request.send(formData);
}
