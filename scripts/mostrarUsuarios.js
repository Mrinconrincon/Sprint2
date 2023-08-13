import { mostrarUsuarios } from "../services/api.js";

const cardsContainer = document.querySelector('.cards-container');

const usuarios = await mostrarUsuarios();

usuarios.forEach(usuario => {
  cardsContainer.innerHTML += `
  <div class="cards-container__card">
    <h2 class="cards-container__card--title">${usuario.nombre} ${usuario.apellido}</h2>
    <p class="cards-container__card--text">${usuario.correo}</p>
    <div class="cards-container__card--button-container" id=${usuario.id}>
      <button class="eliminar">Eliminar</button>
      <button class="editar">Editar</button>
    </div>
  </div>
  `;
});

export const botonesEliminar = document.querySelectorAll('.eliminar'); // [eliminar, eliminar, eliminar, ...]
export const botonesEditar = document.querySelectorAll('.editar');
