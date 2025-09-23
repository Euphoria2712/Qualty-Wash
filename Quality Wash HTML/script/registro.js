document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.querySelector('form');
    
    registroForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
        
        const username = registroForm.querySelector('input[name="username"]').value;
        const email = registroForm.querySelector('input[name="email"]').value;
        const password = registroForm.querySelector('input[name="password"]').value;
        
        // Guarda los datos del usuario en sessionStorage (almacenamiento temporal)
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
        sessionStorage.setItem('email', email);
        
        alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
        window.location.href = 'inicioSesion.html'; // Redirige a la página de inicio de sesión
    });
});