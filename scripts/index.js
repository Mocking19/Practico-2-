const langbuttons = document.querySelectorAll("[data-language]");
const textToChange = document.querySelectorAll("[data-section]");

langbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    fetch(`../languages/${button.dataset.language}.json`)
      .then((response) => response.json())
      .then((data) => {
        textToChange.forEach((element) => {
          const section = element.dataset.section;  
          const value = element.dataset.value;    

          const keys = value.split(".");
          let text = data[section];
          keys.forEach(k => {
            if (text && typeof text === "object") {
              text = text[k];
            }
          });

          if (text) {
            element.innerHTML = text;
          } else {
            console.warn(`⚠️ No se encontró texto para ${section}.${value}`);
          }
        });
      })
      .catch(err => console.error("Error al cargar archivo JSON:", err));
  });
});


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
