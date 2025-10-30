/* Script de validación */
  document.getElementById('checkAvailability').addEventListener('click', function() {
    const sede = document.getElementById('sede').value;
    const llegada = document.getElementById('arrival').value;
    const salida = document.getElementById('departure').value;
    const rooms = document.getElementById('rooms').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;

    if (sede && llegada && salida && rooms && adults && children !== '') {
      const modal = new bootstrap.Modal(document.getElementById('availabilityModal'));
      modal.show();
    } else {
      alert('Por favor, complete todos los campos antes de continuar.');
    }
  });
