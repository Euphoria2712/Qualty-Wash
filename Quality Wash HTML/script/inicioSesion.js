document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario
        
        const enteredUsername = loginForm.querySelector('input[name="username"]').value;
        const enteredPassword = loginForm.querySelector('input[name="password"]').value;
        
        // Obtiene los datos del usuario guardados temporalmente
        const savedUsername = sessionStorage.getItem('username');
        const savedPassword = sessionStorage.getItem('password');
        
        if (enteredUsername === savedUsername && enteredPassword === savedPassword && savedUsername !== null) {
            alert('¡Inicio de sesión exitoso!');
            window.location.href = 'QualityWash.html'; // Redirige a la página principal
        } else {
            alert('Nombre de usuario o contraseña incorrectos.');
        }
    });
});