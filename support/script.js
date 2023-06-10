// Código JavaScript para enviar el formulario mediante AJAX
document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var form = event.target;
    var formData = new FormData(form);
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          alert(xhr.responseText);
          form.reset();
        } else {
          alert('Ha ocurrido un error al enviar el ticket.');
        }
      }
    };
    xhr.send(serializeFormData(formData));
  });
  
  function serializeFormData(formData) {
    var serialized = '';
    for (var [key, value] of formData) {
      serialized += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
    }
    return serialized.slice(0, -1);
  }
  