
const btnLogin = document.getElementById('login');
const nvCollapse = document.getElementById('navbar');
let usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
const navbarCollapse = document.getElementById('navbar');
const btnNavbarToggle = document.querySelector('.navbar-toggler')
let errorEmail;
let errorPassword;


btnLogin.addEventListener("click",  () => {
            navbarCollapse.classList.add("d-none");
        });
btnNavbarToggle.addEventListener('click', () => {
    if (navbarCollapse.classList.contains("d-none")) {
        navbarCollapse.classList.remove("d-none");
    }
})

const formLogin = document.getElementById('form-login');
formLogin.addEventListener('submit', function (e) {
    e.preventDefault()

    const emailLogin = document.getElementById('inputLogin')
    const passwordLogin = document.getElementById('passwordLogin')
    const userExist = usuariosRegistrados.find(user => user.email === emailLogin.value)
    
    if(userExist){
        const correctPassword = userExist.password === passwordLogin.value
        if(!correctPassword){
            error()
            errorPassword = true;
        } else{
            setTimeout(function(){
                window.location.href = '/index.html'
            }, 100)
            localStorage.setItem('currentUser', JSON.stringify(userExist));
        }
    } else {
        error()
        errorEmail = true;
    }
    
    delete userExist.password
    

    
    
    formLogin.reset()




    emailLogin.addEventListener('keydown', deleteMsgError)
    passwordLogin.addEventListener('keydown', deleteMsgError)
    function deleteMsgError(){
        if (errorEmail) {
            document.querySelector('.msg-error').textContent = ''
            errorEmail = false
        }
        if (errorPassword) {
            document.querySelector('.msg-error').textContent = ''
            errorPassword = false
        }
    }
    
})








function error(){
    let msgError = document.createElement('p')
    const containerInputsForm = document.querySelector("#form-login .mb-3");
    msgError.classList.add('msg-error');
    msgError.textContent = 'Contraseña o email incorrecto'
    containerInputsForm.appendChild(msgError)
    
    
}