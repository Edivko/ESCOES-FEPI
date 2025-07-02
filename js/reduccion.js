// reduccion.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formCO2');
  const resultado = document.getElementById('resultadoCO2');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const generacionMensual = parseFloat(document.getElementById('generacionCO2').value);

    if (isNaN(generacionMensual) || generacionMensual <= 0) {
      resultado.innerHTML = '<p style="color:red;">Por favor ingresa un valor válido.</p>';
      return;
    }

    const generacionAnual = generacionMensual * 12;
    const reduccionCO2 = generacionAnual * 0.5; // kg de CO2 evitados por kWh generado

    resultado.innerHTML = `
      <h3>Resultado</h3>
      <p><strong>Reducción estimada anual:</strong> ${reduccionCO2.toFixed(2)} kg CO₂</p>
      <p>Equivalente a ${(reduccionCO2/1000).toFixed(2)} toneladas de CO₂ evitadas cada año.</p>
      <p style="font-style: italic; color: #68C000;">¡Gracias por contribuir al cuidado del medio ambiente con energía limpia!</p>
    `;
  });

  // Modal Simulación
  const btnIrSimulacion = document.getElementById('btnIrSimulacion');
  const modalSimulacion = document.getElementById('modalSimulacion');
  const spanCloseSimulacion = document.querySelector('.closeSimulacion');

  btnIrSimulacion.addEventListener('click', () => {
    modalSimulacion.style.display = "block";
  });

  spanCloseSimulacion.addEventListener('click', () => {
    modalSimulacion.style.display = "none";
  });

  window.addEventListener('click', (event) => {
    if (event.target == modalSimulacion) {
      modalSimulacion.style.display = "none";
    }
  });
});
