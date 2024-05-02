
// Verificar conexión con .html
console.log("Conexión exitosa con admin.html");

// Obtener datos de la base de datos
const mostrarUsuarios = async () => {
    try {
        const respuesta = await fetch("http://localhost:3000/api/obtenerUsuario");
        const usuarios = await respuesta.json();
        console.log(usuarios);
        mostrarTabla(usuarios);

    } catch (error) {
        console.error("Error al obtener los usuarios", error);
    }
}

// Función para alterar las filas de la tabla en .html

function mostrarTabla(usuarios) {
    const tabla = document.getElementById("miTabla");
    tabla.innerHTML = '';

    usuarios.forEach(usuario => {
        // Por cada usuario, se va a crear una fila en la tabla
        tabla.innerHTML += `
            <tr>
                <td><i class='bx bxs-user'></i> ${usuario.nombre}</td>
                <td><i class='bx bxs-envelope' id="email-icon"></i> ${usuario.email}</td>
                <td><i class='bx bxs-id-card' id="id-icon"></i> ${usuario.identificador}</td>
                <td>
                    <button class="delete-btn" id="${usuario._id}" onclick="eliminarUsuario(event)">
                        <i class='bx bxs-trash'></i> Eliminar
                    </button>
                </td>
            </tr>
        `
    });
}
mostrarUsuarios();

// Función para eliminar usuario por ID
function eliminarUsuario(event) {
    console.log('Eliminar');

    const idUsuarioEliminar = event.target.id;
    console.log(idUsuarioEliminar);

    fetch(`http://localhost:9000/api/eliminarUsuario/${idUsuarioEliminar}`, { method: 'DELETE' }).then(
        response => {
            if (!response.ok) {
                console.error('Error. No se pudo eliminar el usuario');
            } else {
                alert('Usuario eliminado correctamente');
                mostrarUsuarios();
            }
        }).catch(error => {
            console.log('Error al eliminar el usuario', error);
        });
}