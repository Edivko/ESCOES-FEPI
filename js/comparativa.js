// comparativa.js

document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('graficaRegiones').getContext('2d');

  const grafica = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Norte', 'Centro', 'Sur'],
      datasets: [{
        label: 'Generación solar promedio (kWh/m²/mes)',
        data: [180, 150, 130],
        backgroundColor: ['#5cb85c', '#f0ad4e', '#d9534f']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

// Calculadora de generación personal
const formGeneracion = document.getElementById('formGeneracion');
const resultadoGeneracion = document.getElementById('resultadoGeneracion');

formGeneracion.addEventListener('submit', (e) => {
  e.preventDefault();

  const region = document.getElementById('regionSelect').value;
  const area = parseFloat(document.getElementById('areaInput').value);

  let radiacion;
  if(region === 'norte') radiacion = 180;
  else if(region === 'centro') radiacion = 150;
  else if(region === 'sur') radiacion = 130;
  else radiacion = 0;

  const eficiencia = 0.8; // 80% eficiencia promedio

  if(!region || isNaN(area) || area <= 0) {
    resultadoGeneracion.innerHTML = '<p style="color:red;">Por favor completa todos los campos correctamente.</p>';
    return;
  }

  const generacion = area * radiacion * eficiencia;

  resultadoGeneracion.innerHTML = `
    <h4>Resultado</h4>
    <p><strong>Generación mensual estimada:</strong> ${generacion.toFixed(2)} kWh</p>
    <p>Región: ${region.charAt(0).toUpperCase() + region.slice(1)}</p>
    <p>Área disponible: ${area} m²</p>
  `;
});
