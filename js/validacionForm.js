const nombre = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let entrar = false;
  if (nombre.value.length < 6) {
    nombre.style.border = "2px solid red";
    alert("El nombre es demasiado corto");
    entrar = true;
  } else if (!regexName.test(nombre.value)) {
    nombre.style.border = "2px solid red";
    alert("Introduce un nombre correcto");
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    email.style.border = "2px solid red";
    alert("Introduce un email correcto");
    entrar = true;
  }
  if (message.value.length < 10) {
    message.style.border = "2px solid red";
    alert("El mensaje es demasiado corto");
    entrar = true;
  }
  if (!entrar) {
    nombre.style.border = "2px solid green";
    email.style.border = "2px solid green";
    message.style.border = "2px solid green";
    alert("Formulario enviado, gracias por contactarte! :)");
    form.reset();
  }
});
