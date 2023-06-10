// script.js

document.addEventListener('DOMContentLoaded', function() {
    const webhookUrl = 'https://discord.com/api/webhooks/1116094610926751925/V1oPhvyBp6mkzzhJOvS--Rw8ArjcpJ3mbpSw1qZDEtVO9gVG6G2z84CN1B1gbwM4ml2i';
  
    function enviarTicket(event) {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const asunto = document.getElementById('asunto').value;
      const mensaje = document.getElementById('mensaje').value;
  
      const data = {
        username: 'Nuevo Ticket',
        avatar_url: '',
        content: `**Nombre:** ${nombre}\n**Correo electrónico:** ${correo}\n**Asunto:** ${asunto}\n**Mensaje:** ${mensaje}`
      };
  
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (response.ok) {
            alert('Ticket enviado con éxito.');
            document.getElementById('ticketForm').reset();
          } else {
            alert('Error al enviar el ticket. Por favor, inténtalo de nuevo.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Error al enviar el ticket. Por favor, inténtalo de nuevo.');
        });
    }
  
    const ticketForm = document.getElementById('ticketForm');
    ticketForm.addEventListener('submit', enviarTicket);
  });
  