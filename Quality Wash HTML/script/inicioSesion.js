document.addEventListener('DOMContentLoaded', () => {

    // Lógica para el formulario de inicio de sesión
    const loginForm = document.querySelector('form');
    if (loginForm) { 
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita el envío del formulario

            const enteredUsername = loginForm.querySelector('input[name="username"]').value;
            const enteredPassword = loginForm.querySelector('input[name="password"]').value;

            // Obtiene los datos del usuario guardados temporalmente
            const savedUsername = sessionStorage.getItem('username');
            const savedPassword = sessionStorage.getItem('password');

            if (enteredUsername === savedUsername && enteredPassword === savedPassword && savedUsername !== null) {
                alert('¡Inicio de sesión exitoso!'); //Manda un mensaje de exito
                window.location.href = 'QualityWash.html'; // Redirige a la página principal
            } else {
                alert('Nombre de usuario o contraseña incorrectos.');
            }
        });
    }

    // Lógica para el botón de cerrar sesión
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (event) => {
            event.preventDefault();

            alert('¡Hasta pronto! Has cerrado tu sesión.');

            // Limpia los datos de sesión almacenados
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('password');

            // Redirige al usuario a la página de inicio de sesión
            window.location.href = 'inicioSesion.html';
        });
    }
});