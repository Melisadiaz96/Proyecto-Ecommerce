const storageUser = JSON.parse(localStorage.getItem('usuariosRegistrados'));
const formRegister = document.querySelector(".form-registro");
const inputEmail = document.getElementById("emailRegister")
const userExists = storageUser.find((usr) => usr.email === inputEmail.value.trim());

formRegister.addEventListener('submit', (e) => {

    e.preventDefault()

    const inputPassword = document.getElementById("passwordRegister")
    const inputPasswordRepeat = document.getElementById('repeatPasswordRegister')
    let msgError = document.createElement('p')
    let errorPassword;
    let errorEmail;

    inputEmail.addEventListener('keydown', deleteMsgError)
    inputPasswordRepeat.addEventListener('keydown', deleteMsgError)

    function deleteMsgError() {
        if (errorEmail) {
            document.querySelector('.msgErrorEmail').textContent = ''
            errorEmail = false
        }
        if (errorPassword) {
            document.querySelector('.msgErrorPassword').textContent = ''
            errorPassword = false
        }
    }

    if (userExists) {
        const containerEmail = document.getElementById("container-email");
        errorEmail = true
        msgError.classList.add('msgErrorEmail')
        msgError.classList.add('msg-error');
        msgError.textContent = 'Este correo ya está asociado a una cuenta.';
        containerEmail.appendChild(msgError);
    } else {

        const newUser = {
            nombre: formRegister.elements.name.value.trim(),
            email: formRegister.elements.correo.value.trim(),
            password: formRegister.elements.contraseña.value.trim(),
            fechaNacimiento: formRegister.elements.fechaNacimiento.value.trim(),
            provincia: formRegister.elements.provincia.value.trim(),
            observaciones: formRegister.elements.observaciones.value.trim(),
            rol: "ROL_USER"
        }

        if (inputPassword.value !== inputPasswordRepeat.value) {
            const passwordRepeatHTML = document.getElementById('container-passwordRepeat')
            msgError.classList.add('msg-error')
            msgError.classList.add('msgErrorPassword')
            errorPassword = true
            msgError.textContent = 'Las contraseñas no coinciden'
            passwordRepeatHTML.appendChild(msgError)

        } else {
            storageUser.push(newUser)
            localStorage.setItem('usuariosRegistrados', JSON.stringify(storageUser));
            Swal.fire({
                
                icon: 'success',
                title: 'Te has registrado con éxito',
                showConfirmButton: false,
                timer: 2000,
                
                }).then(() => {
                    window.location.href = '/index.html'
                }) 
            
        }

    }
})