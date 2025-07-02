// recomendaciones.js

document.addEventListener('DOMContentLoaded', () => {
  const acordeonBtns = document.querySelectorAll('.acordeon-btn');

  acordeonBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('activo');

      const panel = btn.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
