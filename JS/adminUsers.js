const tableAdminHTML = document.querySelector('.table-body-admin')
const usersGuardados = JSON.parse(localStorage.getItem("usuariosRegistrados")) ;


function pintarTablaUsuarios(arrayUsers){
    tableAdminHTML.innerHTML = "";

    arrayUsers.forEach(function (usr, index){
        tableAdminHTML.innerHTML +=
        `<tr>
            <td>${usr.rol}</td>
            <td>${usr.nombre}</td>
            <td>${usr.email}</td>
            <td>${usr.provincia}</td>
            <td>${usr.fechaNacimiento}</td>
            <td>${usr.observaciones}</td>
            <td>
                <div class="buttons-action">
                <button class="button-action btn-delete" onclick="borrarUsuario('${usr.id}')"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </td>
        </tr>`
    })
}

pintarTablaUsuarios(usersGuardados);



function borrarUsuario(userABorrar) {
    Swal.fire({
        title: '¿Desea eliminar este usuario?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: 'var(--terciary-color)',
        cancelButtonColor: 'var(--secondary-color)',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            const userIndex = usersGuardados.findIndex((usr) => {
                if (usr.id === userABorrar) {
                    return true
                } return false
            })

            usersGuardados.splice(userIndex, 1);
            pintarTablaUsuarios(usersGuardados)
            localStorage.setItem("usuariosRegistrados", JSON.stringify(usersGuardados))
            Swal.fire({
                title: 'Eliminado!',
                icon: 'success',
                confirmButtonColor: 'var(--terciary-color)'
            })
        }
    })

}

