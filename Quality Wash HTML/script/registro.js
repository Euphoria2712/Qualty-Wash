document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada.
    const username = document.querySelector('.username input').value;
    const password = document.querySelector('.password input').value;
    const email = document.querySelector('.email input').value;
    if (username === '' || password === '' || email === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }
    const user = {
        username: username,
        password: password,
        email: email
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('¡Usuario registrado con éxito! Ahora puedes iniciar sesión.');
    window.location.href = 'inicioSesion.html';
});