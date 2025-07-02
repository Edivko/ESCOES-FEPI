// simulacion.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formSimulador');
  const resultados = document.getElementById('resultados');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const region = document.getElementById('region').value;
    const area = parseFloat(document.getElementById('area').value);
    const orientacion = document.getElementById('orientacion').value;

    // Radiación solar estimada (kWh/m²/mes) según región
    let radiacion;
    if(region === 'norte') radiacion = 180; // ejemplo norte
    else if(region === 'centro') radiacion = 150; // ejemplo centro
    else if(region === 'sur') radiacion = 130; // ejemplo sur
    else radiacion = 0;

    // Eficiencia del sistema (por ejemplo 80%)
    const eficiencia = 0.8;

    // Cálculo de generación estimada mensual
    const generacion = area * radiacion * eficiencia;

    // Seleccionar imagen según orientación
    let imgSrc = '';
    if (orientacion === 'sur') imgSrc = 'panel-sur.png';
    else if (orientacion === 'este') imgSrc = 'panel-este.png';
    else if (orientacion === 'oeste') imgSrc = 'panel-oeste.png';
    else if (orientacion === 'norte') imgSrc = 'panel-norte.png';
    else imgSrc = 'panel-default.png';

    resultados.innerHTML = `
      <h3>Resultados</h3>
      <img src="${imgSrc}" alt="Paneles solares orientación ${orientacion}" style="max-width:100%; margin-bottom:10px; border-radius:8px;">
      <p><strong>Generación mensual estimada:</strong> ${generacion.toFixed(2)} kWh</p>
      <p><strong>Región seleccionada:</strong> ${region}</p>
      <p><strong>Área disponible:</strong> ${area} m²</p>
      <p><strong>Orientación:</strong> ${orientacion || 'No especificada'}</p>
      <p style="font-style: italic; color: #68C000;">¡Con esta generación podrías reducir tu recibo de luz y contribuir al planeta!</p>
    `;
  });
});
