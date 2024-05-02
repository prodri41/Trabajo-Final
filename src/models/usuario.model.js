// Importar las dependencias que necesitamos usar
import mongoose from "mongoose";

const schema = mongoose.Schema;


//Ahora nos creamos nuestro esquema de datos que es lo que vamos a guardar en nuestra base de datos 

const usuarioSchema = new schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true

    }
});

//Yo quiero enviar la plantilla (schema) a nuestra base de daatos
//crear nuestro modelo

const usuarioModel = mongoose.model("usuario" ,usuarioSchema);

//exportamos nuestro modelo 

export default usuarioModel; 



