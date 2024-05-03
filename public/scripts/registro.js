//1. Verificar conexión con HTML
console.log("hola soy registro");

//2. Crear mi función para registro
const registrarUsuario = async () => {
    //2.1 obtener los datos de mi formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("correo").value;
    const password = document.getElementById("contrasena").value;

    console.log(nombre, email, password);


//2.2 Aqui crear un objeto con los datos del usuario 
const datosUsuario = {
nombre,
email,
password

}

console.log(datosUsuario);


//2.3 hacer la petición POST para crear usuario en nuestra base de datos

try{
const respuesta = await fetch("http://localhost:3000/api//crearUsuario",
{
method: "POST", 
headers:{"Content-Type":"application/json"},
body: JSON.stringify(datosUsuario)

}
); 

const nuevoUsuario = await respuesta.json();
console.log("Usuario creado exitosamente", nuevoUsuario);

//condicional para rediccional

if(nuevoUsuario){
alert("Registro exitoso!");
window.location.href = "./ingreso.html"
} else{
alert("Ups! error de registro, intentelo nuevamente");

}


}catch(error){
    console.error("error al registrar usuario" , error);
}
}