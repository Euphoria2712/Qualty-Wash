document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('top-right-cart-icon');
    const shoppingCart = document.getElementById('shopping-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCountSpan = document.getElementById('cart-count');
    const cartTotalPriceSpan = document.getElementById('cart-total-price');
    const buyButtons = document.querySelectorAll('.comprar-btn');

    let cart = [];

    // Muestra u oculta el carrito al hacer clic en el ícono
    cartIcon.addEventListener('click', (event) => {
        event.preventDefault();
        shoppingCart.classList.toggle('active');
    });

    // Agrega productos al carrito
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.producto-card');
            const productName = productCard.querySelector('h3').innerText;
            const productPrice = parseFloat(productCard.querySelector('.precio').innerText.replace('$', ''));

            const product = {
                name: productName,
                price: productPrice
            };
            
            cart.push(product);
            renderCart();
            updateCartTotal();
            alert(`${productName} ha sido añadido al carrito.`);
        });
    });

    // Renderiza los productos en el carrito
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
        } else {
            cart.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item');
                cartItemElement.innerHTML = `
                    <div class="cart-item-info">
                        <span>${item.name}</span>
                        <span>$${item.price.toFixed(3)}</span>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItemElement);
            });
        }
        
        cartCountSpan.innerText = cart.length;
    }

    // Maneja la compra
    const checkoutBtn = document.getElementById('checkout-btn');
    
    checkoutBtn.addEventListener('click', () => {
        
        if (cart.length === 0) {
            alert("Tu carrito está vacío. Agrega productos antes de finalizar la compra.");
            return;
        }

        cart = [];

        renderCart();
        updateCartTotal();

        alert("¡Compra exitosa! Gracias por tu compra.");

        shoppingCart.classList.remove('active');
    });

    // Actualiza el total del carrito
    function updateCartTotal() {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotalPriceSpan.innerText = total.toFixed(3);
    }
});