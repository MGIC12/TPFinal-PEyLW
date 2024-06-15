$.getJSON("js/lang.json", function (json) {
  //Lenguaje por defecto de la página sessionStorage.setItem("lang", "idioma")"
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "en");
  }
  var lang = localStorage.getItem("lang");
  var doc = json;
  $(".lang").each(function (index, element) {
    $(this).text(doc[lang][$(this).attr("key")]);
  }); //Each
  $(".link").each(function (index, element) {
    $(this).text(doc[lang][$(this).attr("key")]);
  });
  $(".translate").click(function () {
    localStorage.setItem("lang", $(this).attr("id"));
    var lang = $(this).attr("id");
    var doc = json;
    $(".lang").each(function (index, element) {
      $(this).text(doc[lang][$(this).attr("key")]);
    }); //Each
    $(".link").each(function (index, element) {
      $(this).text(doc[lang][$(this).attr("key")]);
    });
  }); //Funcion click
}); //Get json AJAX
