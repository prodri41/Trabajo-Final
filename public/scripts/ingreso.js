console.log('holaaa');

const iniciar = async (event) => {
    event.preventDefault();
    // 1. Obtener los valores ingresados por el usuario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(email, password);

    try {
        // 2. Realizar la solicitud GET al servidor para verificar el inicio de sesión
        const respuesta = await fetch("http://localhost:3000/api/obtenerUsuario");
        const usuarios = await respuesta.json();

        console.log(usuarios);

        // 3. Verificar si se encontró un usuario con el correo y la contraseña proporcionados
        const esUsuarioRegistrado = usuarios.find(usuario => usuario.email === email && usuario.password === password);

        console.log(esUsuarioRegistrado);

        if (esUsuarioRegistrado) {
            // Ahora verificamos si es admin
            const correoAdmin = "admin123@gmail.com"; 

            if (esUsuarioRegistrado.email === correoAdmin) {
                alert('Hola administrador!');
                window.location.href = './admin.html';
            } else {
                alert('Ingreso exitoso!');
                window.location.href = './index.html';
            }
        } else {
            alert('Correo o contraseña incorrectos. Usuario no encontrado! Vuelve a intentarlo o regístrate!');
        }
    } catch (error) {
        console.error('Error al verificar inicio de sesión:', error);
    }
}
