let opt1 = new Array("-", "PlayStation 4", "XBOX");
let opt2 = new Array("-", "PC", "PlayStation 4", "PlayStation 5", "XBOX");
let opt3 = new Array("-", "PC", "PlayStation 4", "PlayStation 5", "XBOX");

// Funcion para cambiar las plataformas
function cambiaEdition() {
  // Obtengo el valor de la edicion
  let edition;
  edition =
    document.myForm.edition[document.myForm.edition.selectedIndex].value;

  // Obtengo las plataformas
  if (edition != 0) {
    // Evalua el valor de la edicion
    opts = eval("opt" + edition);
    // Cuenta el numero de elementos
    num_opt = opts.length;
    document.myForm.platform.length = num_opt;

    // Carga las plataformas en el select correspondiente
    for (i = 0; i < num_opt; i++) {
      // Carga el valor y el texto
      document.myForm.platform.options[i].value = opts[i];
      document.myForm.platform.options[i].text = opts[i];
    }
  } else {
    // Carga el valor y el texto
    document.myForm.platform.length = 1;
    document.myForm.platform.options[0].value = "-";
    document.myForm.platform.options[0].text = "-";
  }

  // Selecciona la primera opcion por defecto
  document.myForm.platform.options[0].selected = true;
}

// Funcion para redireccionar a la pagina segun la plataforma
function redirectToPage() {
  let selectedOption = document.myForm.platform.value;
  let edition = document.myForm.edition.value;
  switch (edition) {
    case "1":
      if (selectedOption === "PlayStation 4") {
        window.open(
          "https://www.amazon.com/Metro-Exodus-PlayStation-4/dp/B07GK3JCD1/ref=sr_1_1?crid=3C80GSP8PKW6O&dib=eyJ2IjoiMSJ9.xsOFgXY4PBfWU35KFV9opzpT0QWw0Bhh-WrZ4JOwxTPis439pan5UC1T89_No-tK8mQ0cIFMDIzw_Xfkh70EJ7w7r26-kr8ZsZxv76lkbyQ.C90HQWW6t80e2MHRt7_ubnrOS2AcHLveVF774DWMvGA&dib_tag=se&keywords=metro+exodus+ps4+physical&qid=1719162599&sprefix=metro+exodus+ps4+physica%2Caps%2C216&sr=8-19"
        );
      } else if (selectedOption === "XBOX") {
        window.open(
          "https://www.amazon.com/Metro-Exodus-Day-One-Xbox/dp/B071JRHD7M/ref=sr_1_1?crid=30OMPA6HRV8K5&dib=eyJ2IjoiMSJ9.dV0QwMYc-YBLsN9tJ1Ks1ppaA03PUCPH7VGRIScCiOTQ0cmoUGjnuGh7GE5EXvuxGETo8ikLmi_fHzkKyc5zLwDiEyk5QHz58Sxq6rMNrXyE5fs1XYDsVo2go59tKjuu.vbOYmTi0KW7nI_bceWG3Fwtm6gm4aviBXxDsQk_br8w&dib_tag=se&keywords=metro+exodus+xbox+physical&qid=1719162757&sprefix=metro+exodus+xbox+physical%2Caps%2C210&sr=8-1"
        );
      }
      break;

    case "2":
      if (
        selectedOption === "PlayStation 4" ||
        selectedOption === "PlayStation 5"
      ) {
        window.open(
          "https://store.playstation.com/es-ar/product/UP2047-PPSA02395_00-METROEXODUS0GEN9"
        );
      } else if (selectedOption === "XBOX") {
        window.open(
          "https://www.xbox.com/es-ar/games/store/metro-exodus/c1tbtqbvjmfl"
        );
      } else if (selectedOption === "PC") {
        window.open("https://store.steampowered.com/app/412020/Metro_Exodus/");
      }
      break;
    case "3":
      if (
        selectedOption === "PlayStation 4" ||
        selectedOption === "PlayStation 5"
      ) {
        window.open(
          "https://store.playstation.com/es-ar/product/UP2047-PPSA02395_00-821MEEGOLDEDGEN9"
        );
      } else if (selectedOption === "XBOX") {
        window.open(
          "https://www.xbox.com/es-AR/games/store/metro-exodus-gold-edition/C3BVG9LGGV75/0001"
        );
      } else if (selectedOption === "PC") {
        window.open("https://store.steampowered.com/sub/298833/");
      }
      break;
  }
}
