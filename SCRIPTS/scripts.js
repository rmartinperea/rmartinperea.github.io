// Detectamos el evento de scroll
window.onscroll = function () {
    toggleHeader();
};

// Elementos del DOM
var header = document.querySelector('.header-principal');
var contactBar = document.querySelector('.header-contacto');

// Función que se ejecuta al hacer scroll
function toggleHeader() {
    // Si el desplazamiento es mayor que la altura de la barra de contacto
    if (window.pageYOffset > contactBar.offsetHeight) {
        // Ocultamos la barra de contacto
        contactBar.style.top = '-60px';  // Ajusta este valor según la altura de tu barra
        // Movemos el header más hacia arriba al hacer scroll
        header.style.top = '-30px';  // Ajusta este valor según cuánto quieres que suba
    } else {
        // Cuando volvemos hacia arriba, mostramos la barra de contacto
        contactBar.style.top = '0';  // Vuelve a la posición original
        // Restauramos el padding original y el top del header
        header.style.top = '0';  // El header vuelve a su posición original
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.hero img'); // Seleccionamos todas las imágenes en el Hero
    let currentIndex = 0; // El índice de la imagen actualmente visible
    
    // Función para cambiar de imagen
    function changeImage() {
        // Remover la clase 'active' de la imagen actual
        images[currentIndex].classList.remove('active');

        // Actualizamos el índice para la siguiente imagen
        currentIndex = (currentIndex + 1) % images.length;

        // Añadimos la clase 'active' a la nueva imagen
        images[currentIndex].classList.add('active');
    }

    // Cambiar de imagen cada 5 segundos
    setInterval(changeImage, 5000); // Cambia cada 5000 milisegundos (5 segundos)

    // Iniciar la primera imagen como activa
    images[0].classList.add('active');
});

// Seleccionamos los elementos del carrusel
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const images = Array.from(document.querySelectorAll('.carousel img'));

// Calculamos el ancho de las imágenes dinámicamente
const imageWidth = images[0].getBoundingClientRect().width;

// Configuración inicial
let currentIndex = 0;

// Actualizamos la posición del carrusel
function updateCarousel() {
  const translateX = -(currentIndex * imageWidth); // Movemos el carrusel
  track.style.transform = `translateX(${translateX}px)`;
}

// Evento para el botón "Siguiente"
nextButton.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Evento para el botón "Anterior"
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Ajustamos el ancho dinámicamente si la ventana se redimensiona
window.addEventListener('resize', () => {
  const newImageWidth = images[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * newImageWidth}px)`;
});
