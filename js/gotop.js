// Funcion para el scroll top
window.onscroll = function () {
  // Si el scroll es mayor a 100, muestra el boton
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".go-top-container").classList.add("show");
  } else {
    // Sino, oculta el boton
    document.querySelector(".go-top-container").classList.remove("show");
  }
};

// Evento para el scroll top al presionar el boton
document.querySelector(".go-top-button").addEventListener("click", () => {
  // Hace scroll hasta arriba con smooth behavior
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
