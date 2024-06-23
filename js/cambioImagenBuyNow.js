function cambioImagen() {
  edition = document.getElementById("edition");
  image = document.getElementById("buynow-col-b");

  if (edition.value == "1") {
    image.innerHTML = '<img src="../src/img/game_covers/gamefisico.png" />';
  } else if (edition.value == "2") {
    image.innerHTML =
      '<img src="../src/img/game_covers/MetroExodus-PCEnhancedEdition.jpeg" />';
  } else if (edition.value == "3") {
    image.innerHTML =
      '<img src="../src/img/game_covers/MetroExodusGoldEdition.png" />';
  } else {
    image.innerHTML = '<img src="../src/img/icons_symbols/logoMetro.png" />';
  }
}
