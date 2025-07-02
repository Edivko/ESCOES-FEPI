// ahorro.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formAhorro');
  const resultado = document.getElementById('resultadoAhorro');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const generacion = parseFloat(document.getElementById('generacion').value);
    const tarifa = parseFloat(document.getElementById('tarifa').value);

    if (isNaN(generacion) || generacion <= 0 || isNaN(tarifa) || tarifa <= 0) {
      resultado.innerHTML = '<p style="color:red;">Por favor ingresa valores válidos.</p>';
      return;
    }

    const ahorro = generacion * tarifa;

    resultado.innerHTML = `
      <h3>Resultado</h3>
      <p><strong>Ahorro mensual estimado:</strong> $${ahorro.toFixed(2)} MXN</p>
      <p>Con una generación de ${generacion} kWh y un costo promedio de $${tarifa} MXN por kWh.</p>
      <p style="font-style: italic; color: #68C000;">¡Este ahorro puede ayudarte a reducir significativamente tu recibo de luz!</p>
    `;
  });

  // Modal costos por región
  const btnCostos = document.getElementById('btnCostos');
  const modal = document.getElementById('modalCostos');
  const spanClose = document.querySelector('.close');

  btnCostos.addEventListener('click', () => {
    modal.style.display = "block";
  });

  spanClose.addEventListener('click', () => {
    modal.style.display = "none";
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
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

