let productosGuardados = JSON.parse(localStorage.getItem("productosGuardados"));

const containerCardsHTML = document.querySelector(".container-cards");

function pintarProducto(productosAPintar){

    containerCardsHTML.innerHTML = "";

    productosAPintar.forEach(function(product,index){
        

        containerCardsHTML.innerHTML += 
        `
        <div class="cards ">
        <div class="card-header">
            <img src="${product.imagen}" alt="${product.nombre}">
        </div>
        <div class="card-body">
            <h2 class="product-name">${product.nombre}</h2>
            <p class="product-description">${product.descripcion}</p>
            <div class="precios">
                <div class="fecha-ingreso">
                    <p>Fecha de Ingreso</p>
                    <p>${product.fechaIngresado}</p>
                </div>
                <p class="precio">$${product.precio}</p>
            </div>
        </div>
        <div class="card-footer">
            <button type="" class="button-detalles">Detalles</button>
            <button type="">Comprar</button>
        </div>
    </div>
        `
    })

    
};

pintarProducto(productosGuardados);
