// Carrusel automático para libros destacados
window.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#librosCarousel');
    if (carousel && window.bootstrap) {
        const interval = 4000;
        let bsCarousel = new bootstrap.Carousel(carousel, { interval: interval });
    }
});
