const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  // Cargar el archivo JSON correspondiente al idioma
  const requestJson = await fetch(`../js/languages/${language}.json`);
  // Obtener el objeto JSON
  const texts = await requestJson.json();

  // Guardar el idioma seleccionado en el almacenamiento local
  localStorage.setItem("selectedLanguage", language);

  //Recorrer todos los elementos a cambiar
  for (const textToChange of textsToChange) {
    //Obtener la sección y el valor
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    //Cambia el texto del elemento al valor correspondiente
    textToChange.innerHTML = texts[section][value];
  }
};

// Verificar si hay un idioma seleccionado previamente en el almacenamiento local
const selectedLanguage = localStorage.getItem("selectedLanguage");
if (selectedLanguage) {
  changeLanguage(selectedLanguage);
}

flagsElement.addEventListener("click", (e) => {
  //Cambia el idioma al hacer click en flagsElement
  changeLanguage(e.target.parentElement.dataset.language);
});
