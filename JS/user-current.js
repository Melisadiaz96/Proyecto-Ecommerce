const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const btnLogout = document.getElementById('logout');



if (currentUser) {
    const usrInfo = document.querySelector('.info-user');
    if (usrInfo.classList.contains('d-none')){
        usrInfo.classList.remove('d-none')
    }
    usrInfo.innerHTML = `<div >${currentUser.nombre}</div>`
    const btnLogin = document.querySelector('.button-login');
    const btnRegister = document.querySelector('.link-register');
    btnRegister.classList.add('d-none');
    btnLogin.classList.add('d-none');
    btnLogout.classList.remove('d-none')


    if (currentUser.rol === 'ROL_ADMIN') {
        const navList = document.querySelector('.nav-list-item')
        const navAdminProduct = document.createElement('li');
        const navAdminUser = document.createElement('li');
        const adminProductItem = document.createElement('a');
        const adminUserItem = document.createElement('a');

        navAdminProduct.classList.add('nav-item');
        adminProductItem.classList.add('nav-link');
        adminProductItem.textContent = 'Productos'
        navAdminProduct.appendChild(adminProductItem);

        navAdminUser.classList.add('nav-item');
        adminUserItem.classList.add('nav-link');
        adminUserItem.textContent = 'Usuarios';
        navAdminUser.appendChild(adminUserItem);
        adminProductItem.setAttribute('href', '/pages/admin-product/admin-product.html')
        adminUserItem.setAttribute('href', '/pages/admin-users/admin-users.html')
        navList.appendChild(navAdminProduct)
        navList.appendChild(navAdminUser)


    }
} else {

    if (btnLogin.classList.contains('d-none')) {
        btnLogin.classList.remove('d-none')
    }

    usrInfo.classList.remove('d-none')
}


btnLogout.addEventListener('click', (e) => {
    e.preventDefault()
    logout()
})

function logout() {

    localStorage.removeItem("currentUser")
    setTimeout(function () {
        window.location.href = "/index.html"
    }, 500)
}







