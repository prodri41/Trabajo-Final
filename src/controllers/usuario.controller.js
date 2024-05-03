// Importamos dependencias
import usuarioModel from "../models/usuario.model.js";

/*
    PETICIONES
    GET -> muestra usuarios
    POST -> crea usuarios
    PUT -> modifica usuarios
    DELETE -> elimina usuarios
*/

// Lógica para mostrar usuarios
export const getUsuario = async (req, res) => {
    try {
        let usuarios = await usuarioModel.find();
        return res.send(usuarios);
    } catch (error) {
        return res.json({error: "Error al mostrar los datos: " + error});
    }
}

// Lógica para crear usuarios
export const postUsuario = async (req, res) => {
    try {
        let datosUsuario = req.body;
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario);
    } catch (error) {
        return res.json({error: "Error al crear el usuario", message: error.message});
    }
}

// Lógica para modificar usuarios
export const putUsuario = async (req, res) => {
    try {
        let datosModificar = req.body;
        let idModificar = req.params._id;
        await usuarioModel.findByIdAndUpdate(idModificar, datosModificar);
        return res.json({message: "Usuario actualizado correctamente"});
    } catch (error) {
        return res.json({error: "Error al modificar el usuario", message: error.message});
    }
}

// Lógica para eliminar usuarios
export const deleteUsuario = async (req, res) => {
    try {
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);
        if (usuarioEliminado) {
            return res.json({message: "Usuario eliminado correctamente"});
        } else {
            return res.json({message: "Ups! No se pudo eliminar ese usuario"});
        }
    } catch (error) {
        return res.json({error: "Error al eliminar usuario", message: error.message});
    }
}


