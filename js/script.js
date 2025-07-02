// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('ECOES cargado correctamente.');

    // Ejemplo: alerta al hacer clic en 'Leer más'
    const leerMasBtn = document.querySelector('.boton');
    if (leerMasBtn) {
        leerMasBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Aquí puedes enlazar a la página de información completa de ECOES.');
        });
    }
});

