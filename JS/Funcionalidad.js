document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevenir el comportamiento por defecto del enlace
            alert('Has hecho clic en ' + this.textContent+' desea cambiar la vista de la página?');
        });
    });
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#555';
        } else {
            header.style.backgroundColor = '#333';
        }
    });
});
