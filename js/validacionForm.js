const nombre = document.getElementById("name");
const inputNombre = document.querySelector("input[name='name']");
const apellido = document.getElementById("last-name");
const inputLastName = document.querySelector("input[name='last-name']");
const email = document.getElementById("email");
const inputEmail = document.querySelector("input[name='email']");
const country = document.getElementById("country");
const inputCountry = document.querySelector("select[name='country']");
const message = document.getElementById("message");
const inputMessage = document.querySelector("textarea[name='message']");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let entrar = false;
  //Validación nombre
  if (
    nombre.value.length < 3 ||
    nombre.value.length > 20 ||
    inputNombre.value.trim() === ""
  ) {
    nombre.style.border = "2px solid red";
    alert("El nombre es demasiado corto");
    entrar = true;
  } else if (!regexName.test(nombre.value)) {
    nombre.style.border = "2px solid red";
    alert("Introduce un nombre correcto");
    entrar = true;
  } else if (nombre.value !== nombre.value.trim()) {
    nombre.style.border = "2px solid red";
    alert("El nombre no debe contener espacios al inicio o final");
    entrar = true;
  } else {
    nombre.style.border = "2px solid green";
  }

  //Validación apellido
  if (
    apellido.value.length < 4 ||
    apellido.value.length > 20 ||
    inputLastName.value.trim() === ""
  ) {
    apellido.style.border = "2px solid red";
    alert("El apellido es demasiado corto");
    entrar = true;
  } else if (!regexName.test(apellido.value)) {
    apellido.style.border = "2px solid red";
    alert("Introduce un apellido correcto");
    entrar = true;
  } else if (apellido.value !== apellido.value.trim()) {
    apellido.style.border = "2px solid red";
    alert("El apellido no debe contener espacios al inicio o final");
    entrar = true;
  } else {
    apellido.style.border = "2px solid green";
  }

  //Validación país
  if (country.value == "") {
    country.style.border = "2px solid red";
    alert("Por favor, seleccione un pais");
    entrar = true;
  } else {
    country.style.border = "2px solid green";
  }

  //Validación email
  if (!regexEmail.test(email.value) || inputEmail.value.trim() === "") {
    email.style.border = "2px solid red";
    alert("Introduce un email correcto");
    entrar = true;
  } else if (email.value !== email.value.trim()) {
    email.style.border = "2px solid red";
    alert("El email no debe contener espacios al inicio o final");
    entrar = true;
  } else {
    email.style.border = "2px solid green";
  }

  //Validación mensaje
  if (message.value.length < 10 || inputMessage.value.trim() === "") {
    message.style.border = "2px solid red";
    alert("El mensaje es demasiado corto");
    entrar = true;
  } else if (message.value !== message.value.trim()) {
    message.style.border = "2px solid red";
    alert("El mensaje no debe contener espacios al inicio o final");
    entrar = true;
  } else if (message.value.length > 500) {
    message.style.border = "2px solid red";
    alert("El mensaje es demasiado extenso");
    entrar = true;
  } else {
    message.style.border = "2px solid green";
  }

  if (!entrar) {
    alert("Formulario enviado, gracias por contactarte! :)");
    form.reset();
  }
});
