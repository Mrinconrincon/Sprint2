import { eliminarUsuario } from "../services/api.js";
import { botonesEliminar } from "./mostrarUsuarios.js";

const modalEliminarUsuario = document.querySelector('.modal-delete-container__background');
const botonAceptar =  document.querySelector('.aceptar');
const botonCancelar = document.querySelector('.cancelar');

botonesEliminar.forEach(botonEliminar => {
  botonEliminar.onclick = async () => {
    modalEliminarUsuario.style.display = 'grid';
    botonAceptar.addEventListener('click', async () => {
      const idUsuario = botonEliminar.parentElement.id;
      await eliminarUsuario(idUsuario);
    });
    botonCancelar.addEventListener('click', () => {
      modalEliminarUsuario.style.display = 'none';
    });
  }
});