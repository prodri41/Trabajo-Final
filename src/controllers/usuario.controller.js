//importamos dependencias -> lo que necesitamos para el funcionamiento del codigo

import usuarioModel from "../models/usuario.model.js";



/*
    ->PETICIONES
    GET -> me muestra mis usuarios
    POST -> crear usuarios
    PUT -> Me modifica mis usuarios
    DELETE -> Me elimina mis usuarios
*/


//Prueba inicial

//LÓGICA PARA MOSTRAR USUARIOS
export const getUsuario = async(req, res) => {
    
    //Manejo de errores con try y catch

    try{
        let usuarios = await usuarioModel.find();
        return res.send(usuarios);
    }catch(error){
        return res.json({error: "error al mostrar los datos" + error});
    }
}

//LÓGICA PARA CREAR USUARIOS
export const postUsuario = async(req, res) => {
    //menejo de errores con try y catch

    try{
        let datosUsuario = req.body;
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario);

    }catch(error){
        return res.json({error: "error al crear el usuario", 
    message:error.message});

    }
}

//LÓGICA PARA MODIFICAR USUARIOS
export const putUsuario = async(req, res) => {
   
    try {
        let datosModificar = req.body;
        let idModificar = req.params._id;

        await usuarioModel.findByIdAndUpdate(idModificar,da);
        return res.json({message:"Usuario actualizado correctamente"});

    }catch(error){
        //para que me muestre un mensaje que me indique cual es el error
        return res.json({error: "error al modificar el usuario", 
    message:error.message});
}

}
//LÓGICA PARA ELIMINAR USUARIOS
export const deleteUsuario = async(req, res) => {
    try{
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);

        if(usuarioEliminado){
            return res.json({message: "Usuario eliminado correctamente"});
        }else{
            return res.json({message: "Ups! no se pudo eliminar ese usuario"});
        }
    }
}

}catch(error){
    return res.json({error: "error al eliminar usuario", message:error.message});
}
}












