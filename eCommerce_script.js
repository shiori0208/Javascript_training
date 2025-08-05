document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {id: 1, name: "Strawberry Keychain", price: 3.50},
        {id: 2, name: "Cat Plushie", price: 13.50},
        {id: 3, name: "Barbie stickers", price: 2.40},
    ];

    const cart = []; 
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart"); 
    const cartTotalMessage = document.getElementById("cart-total"); 
    const totalPriceDisplay = document.getElementById("total-price"); 
    const checkOutBtn = document.getElementById("checkout-btn"); 

    products.forEach(product => {
        const productDiv = document.createElement('div'); 
        productDiv.classList.add('product');
        productDiv.innerHTML = 
        `<span> ${product.name} : ${product.price.toFixed(2)} </span>
        <button data-id="${product.id}">Add to Cart</button>`; 
        productList.appendChild(productDiv); 

    });

    productList.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
           const productId = parseInt(e.target.getAttribute("data-id"));
           const product = products.find(p => p.id === productId);
           addToCart(product);   
        }
    })

    function addToCart(product) {
        cart.push(product); 
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = "";
        let totalPrice = 0;

        if(cart.length) {
            emptyCartMessage.classList.add("hidden"); 
            cartTotalMessage.classList.remove("hidden"); 

        }
        else {
            emptyCartMessage.classList.remove("hidden"); 
        }
    }





});