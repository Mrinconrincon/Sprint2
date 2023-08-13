import { crearUsuario } from "../services/api.js";

// Manejo del DOM
const form = document.querySelector('.form-container__register-form');
const inputName = document.querySelector('.form-container__register-form--name');
const inputLastname = document.querySelector('.form-container__register-form--lastname');
const inputEmail = document.querySelector('.form-container__register-form--email');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // previene el comportamiento por defecto del formulario que es recargar la pagina

  // objeto = { key: value }
  const datosUsuario = {
    nombre: inputName.value,
    apellido: inputLastname.value,
    correo: inputEmail.value
  }

  await crearUsuario(datosUsuario);
});