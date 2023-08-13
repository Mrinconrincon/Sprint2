import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const BASE_URL = 'http://localhost:3000';

/** Peticiones para productos */
const createProduct = async (product) =>{
    try{
        const response = await fetch('http://localhost:3000/compras',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(product)
        });
        const  productos = await response.json();
        return productos
    }catch(e){
        console.log("Error",e)
    }
}

const listProducts = async () =>{
    try{
        const response = await fetch('http://localhost:3000/productos');
        const productsData = await response.json();
        return productsData;
    }catch(e){
        console.log("Error",e)
    }
}

/** Peticiones para usuarios (workshop) */

/** Crear Ususario */
const crearUsuario = async (body) => {
    try {
        const respuesta = await axios.post(`${BASE_URL}/usuarios/`, body);
        return respuesta;
    } catch (error) {
        console.log('Hubo un error creando el usuario, por favor intente de nuevo', error);
    }
}

/** Mostrar Ususarios */
const mostrarUsuarios = async () => {
    try {
        const respuesta = await axios.get(`${BASE_URL}/usuarios/`);
        return respuesta.data;
    } catch (error) {
        console.log(error);
    }
}

/** Editar Ususario */
const editarUsuario = async (id, body) => {
    try {
        const respuesta = await axios.put(`${BASE_URL}/usuarios/${id}`, body);
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

/** Eliminar Ususario */
const eliminarUsuario = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/usuarios/${id}`);
        return true;
    } catch (error) {
        console.log(error);
    }
}


export { createProduct, listProducts, crearUsuario, mostrarUsuarios, editarUsuario, eliminarUsuario };