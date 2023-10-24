const user = JSON.parse(localStorage.getItem("currentUser"))

if(user && user.rol !== "ROL_ADMIN") {

    window.location.href = '/index.html'

}