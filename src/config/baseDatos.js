//Importammos las dependencias que necesitamos
import mongoose from "mongoose";

//Crear una fincion que nos conecte la base de datps
const conexionMongo = async() => {

await mongoose.connect(process.env.BD_URL)

//control de errores con try - catch 
try{
    console.log('conexión exitosa')
} catch(error){
    console.log('Error de conexión:', error.message);
}

}

//tenemos que exportar nuestra función para llamarla desde nuestro servidor

export default conexionMongo;