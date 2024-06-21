const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`../js/languages/${language}.json`);
  const texts = await requestJson.json();

  // Guardar el idioma seleccionado en el almacenamiento local
  localStorage.setItem("selectedLanguage", language);

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML = texts[section][value];
  }
};

// Verificar si hay un idioma seleccionado previamente en el almacenamiento local
const selectedLanguage = localStorage.getItem("selectedLanguage");
if (selectedLanguage) {
  changeLanguage(selectedLanguage);
}

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});
