// Obtengo los elementos necesarios del DOM
const filterContainer = document.querySelector(".gallery-filter");
galleryItems = document.querySelectorAll(".gallery-item");

// Evento para el filtro
filterContainer.addEventListener("click", (e) => {
  // Verifico si el elemento clickeado es un filtro
  if (e.target.classList.contains("filter-item")) {
    // Elimino la clase active de todos los filtros
    filterContainer.querySelector(".active").classList.remove("active");
    // Agrego la clase active al filtro clickeado
    e.target.classList.add("active");
    // Obtengo el valor del atributo data-filter del filtro clickeado
    const filterValue = e.target.getAttribute("data-filter");

    // Recorro todos los elementos de la galería
    galleryItems.forEach((item) => {
      // Si el elemento contiene el valor del atributo data-filter o es "all", lo muestra
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        // Si el elemento no contiene el valor del atributo data-filter, lo oculta
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});
