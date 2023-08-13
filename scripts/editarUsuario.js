import { editarUsuario } from "../services/api.js";
import { botonesEditar } from "./mostrarUsuarios.js";

// Manejo del DOM
const modalEditarUsuario = document.querySelector('.modal-form-container__background');
const botonCerrarModal = document.querySelector('.modal-form-container__close');
const form = document.querySelector('.modal-form-container__register-form');
const inputName =  document.querySelector('.modal-form-container__register-form--name');
const inputLastname = document.querySelector('.modal-form-container__register-form--lastname');
const inputEmail = document.querySelector('.modal-form-container__register-form--email');

botonesEditar.forEach(botonEditar => {
  botonEditar.onclick = async () => {
    modalEditarUsuario.style.display = 'grid';
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const datosUsuarioEditados = {
        nombre: inputName.value,
        apellido: inputLastname.value,
        correo: inputEmail.value
      }
      const idUsuario = botonEditar.parentElement.id;
      await editarUsuario(idUsuario, datosUsuarioEditados);
    });
    botonCerrarModal.addEventListener('click', () => {
      modalEditarUsuario.style.display = 'none';
    });
  }
});


