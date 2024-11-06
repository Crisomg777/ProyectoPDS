document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const username = document.getElementById('registerUsername').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            if (!email.endsWith('@eafit.edu.co')) {
                alert('El correo electrónico debe ser del dominio @eafit.edu.co');
                return;
            }
            if (localStorage.getItem(username)) {
                alert('El usuario ya está registrado. Por favor, inicia sesión.');
            } else {
                const userData = { email: email, password: password };
                localStorage.setItem(username, JSON.stringify(userData));
                alert('Registro exitoso. Ahora puedes iniciar sesión.');
                window.location.href = '../Pages/login.html';   
            }
        });
    }
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();  
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const userData = JSON.parse(localStorage.getItem(username));
            if (userData && userData.password === password) {
                sessionStorage.setItem('loggedInUser', username);  
                window.location.href = 'dashboard.html'; 
            } else {
                alert('Nombre de usuario o contraseña incorrectos.');
            }
        });
    }
    /* document.getElementById("home").addEventListener("click", function(event) {
        event.preventDefault(); 
        location.reload(); 
    }) */
});

function goToNegocio(direccion) {
    window.location.href = direccion;
}

