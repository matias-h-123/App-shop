document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const enviarBtn = document.getElementById('enviarBtn');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario por defecto

        // Validación básica del formulario (puedes agregar más validaciones según necesites)
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '' || email === '' || mensaje === '') {
            alert('Por favor completa todos los campos.');
            return;
        }

        // Simular envío exitoso (puedes realizar aquí una petición AJAX o enviar el formulario realmente)
        setTimeout(function() {
            alert('Mensaje enviado con éxito.');
            form.reset(); // Limpiar formulario después del envío
        }, 1000); // Simular envío exitoso después de 1 segundo (puedes ajustar según necesites)
    });
});