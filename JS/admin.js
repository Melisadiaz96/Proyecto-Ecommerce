let productosGuardados = JSON.parse(localStorage.getItem("productosGuardados"));

const tableProductsHTML = document.querySelector(".table-products");



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
            <td>${product.precio}</td>
            <td>${product.fechaIngresado}</td>
            <td>
                <div class="buttons-action">
                    <button class="button-action button-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="button-action button-delete"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </td>
        </tr> `
    })
}


pintarTablaProductos(productosGuardados)