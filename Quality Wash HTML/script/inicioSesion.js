document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario.
    const enteredUsername = document.querySelector('.username input').value;
    const enteredPassword = document.querySelector('.password input').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === enteredUsername && storedUser.password === enteredPassword) {
        alert('¡Inicio de sesión exitoso!');
        window.location.href = 'QualityWash.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
});