const btnLogin = document.getElementById('login');
const nvCollapse = document.getElementById('navbar');
let usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

btnLogin.addEventListener("click", function (e) {
    if (e.target.dataset.toggle === "collapse-button") {
        const targetElement = document.getElementById('navbar');

        if (targetElement) {
            const isCollapsed = targetElement.dataset.collapsed === "true";
            targetElement.dataset.collapsed = isCollapsed ? "false" : "true";
            targetElement.style.display = isCollapsed ? "block" : "none";
        }
    }
});





// if(userLogged){
//     const registerNav = document.getElementById('registerNav');

//     registerNav.classList.add('d-none')
// }


// <li class="nav-item d-none">
//     <a class="nav-link" href="/pages/admin-product/admin-product.html">Productos</a>
// </li>
// <li class="nav-item d-none">
//     <a class="nav-link" href="/pages/admin-users/admin-users.html">Usuarios</a>
// </li>