document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll('.product');

    // Función para agregar animación al hacer hover sobre cada producto
    products.forEach(product => {
        product.addEventListener('mouseenter', function() {
            this.classList.add('animate-product');
        });

        product.addEventListener('mouseleave', function() {
            this.classList.remove('animate-product');
        });
    });
});