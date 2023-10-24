let productosGuardados = JSON.parse(localStorage.getItem("productosGuardados")) || [];
const tableProductsHTML = document.querySelector(".table-products");
const submitBtn = document.querySelectorAll('.btn[type="submit"]')
const form = document.getElementById('formulario')
let edit;
const modalForm = new bootstrap.Modal('#modalForm');

function pintarTablaProductos(arrayProductos) {
    tableProductsHTML.innerHTML = "";

    arrayProductos.forEach(function (product, index) {
        tableProductsHTML.innerHTML +=
            `<tr>
            <td>
                <img class="img-table" src="${product.imagen}" alt="${product.nombre}">
            </td>
            <td>${product.nombre}</td>
            <td>${product.descripcion}</td>
            <td>$${product.precio}</td>
            <td>${product.fechaIngresado}</td>
            <td>
                <div class="buttons-action">
                    <button class="button-action button-edit" data-bs-toggle="modal" data-bs-target="#modalForm" onclick="editarProducto('${product.id}')"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="button-action button-delete" onclick="borrarProducto('${product.id}')"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </td>
        </tr> `
    })
};


pintarTablaProductos(productosGuardados);


form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(edit){
        id = edit
    } else {
        id = crypto.randomUUID()
    }

    const productoNuevo = {
        imagen: form.elements.imagen.value,
        nombre: form.elements.nombre.value,
        descripcion: form.elements.descripcion.value,
        fechaIngresado: fecha(),
        precio: form.elements.precio.value,
        id: id
    }

    if(edit) {
        const index = productosGuardados.findIndex(productosGuardados => {
            return productosGuardados.id === edit
        })
        productosGuardados[index] = productoNuevo;

        edit = undefined;

        

    } else {
        productosGuardados.push(productoNuevo)
    }
    localStorage.setItem('productosGuardados', JSON.stringify(productosGuardados));
    pintarTablaProductos(productosGuardados);
    form.reset()
    modalForm.hide()
})



function editarProducto(prodAEditar) {

    const prodEdited = productosGuardados.find(prod => prod.id === prodAEditar);

    

    if (prodEdited) {
        const elements = form.elements;
        elements.imagen.value = prodEdited.imagen;
        elements.nombre.value = prodEdited.nombre;
        elements.descripcion.value = prodEdited.descripcion;
        elements.precio.value = prodEdited.precio;

        edit = prodEdited.id
        
    }
}



function borrarProducto(prodABorrar) {
    Swal.fire({
        title: '¿Desea borrar este producto?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: 'var(--terciary-color)',
        cancelButtonColor: 'var(--secondary-color)',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            const productIndex = productosGuardados.findIndex((producto) => {
                if (producto.id === prodABorrar) {
                    return true
                } return false
            })

            productosGuardados.splice(productIndex, 1);
            pintarTablaProductos(productosGuardados);
            localStorage.setItem("productosGuardados", JSON.stringify(productosGuardados))
            Swal.fire({
                title: 'Eliminado!',
                icon: 'success',
                confirmButtonColor: 'var(--terciary-color)'
            })
        }
    })

}




function fecha() {
    const fecha = new Date();
    let mes = fecha.getMonth() + 1;
    if (mes < 10) {
        mes = '0' + mes
    }
    const year = fecha.getFullYear();
    let dia = fecha.getDate();
    if (dia < 10) {
        dia = '0' + dia
    }
    const fechaActual = `${dia}/${mes}/${year}`;
    return fechaActual;
}