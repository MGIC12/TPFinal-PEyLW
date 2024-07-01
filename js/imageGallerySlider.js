// Obtengo los elementos necesarios del DOM
let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

// Inicializo variables
let active = 0; // Indice del item activo
let lengthItems = items.length - 1; // Número total de elementos

// Evento para el botón next
next.onclick = function () {
  // Si el elemento activo es el último, vuelve al primer elemento
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    // Sino, aumenta el indice del elemento activo
    active += 1;
  }
  // Función que recarga el slider
  reloadSlider();
};

// Evento para el botón prev
prev.onclick = function () {
  // Si el elemento activo es el primero, vuelve al último elemento
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    // Sino, disminuye el indice del elemento activo
    active -= 1;
  }
  // Función que recarga el slider
  reloadSlider();
};

// Función que automatiza el slider para que ejecute la acción de la funcion next cada 5 segundos
let refreshSlider = setInterval(() => {
  next.click();
}, 5000);

// Función que recarga el slider
function reloadSlider() {
  // Obtengo la posicion izquierda del elemento activo
  let checkLeft = items[active].offsetLeft;
  // Establezco la posicion izquierda del elemento de la lista a la posición izquierda calculada
  list.style.left = -checkLeft + "px";

  // Elimino la clase active del elemento activo del elemento anterior
  let lastActiveDot = document.querySelector(".slider .dots li.active");
  lastActiveDot.classList.remove("active");
  // Agrego la clase active al nuevo elemento activo
  dots[active].classList.add("active");
  // Limpio el intervalo de actualización del slider
  clearInterval(refreshSlider);
  // Reinicio el intervalo de actualización del slider
  refreshSlider = setInterval(() => {
    next.click();
  }, 5000);
}

// Listeners para los puntos del slider para cambiar el elemento activo
dots.forEach((li, key) => {
  // Evento para cambiar el elemento activo al hacer click en los puntos del slider al ser clickeados
  li.addEventListener("click", function () {
    active = key;
    // Función que recarga el slider
    reloadSlider();
  });
});
