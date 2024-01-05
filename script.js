const totalPrice = document.querySelector('#totalPrice');
const cartList = document.querySelector('#list');
let cartCount = parseInt(document.querySelector("#cart-count").innerHTML);
let total = 0;
const cart = document.querySelector('#cart');
const target = document.querySelector('.cart')

document.querySelectorAll(".productCard").forEach(card => {
    card.addEventListener("click", function() {
        const productName = this.querySelector(".product-name").textContent;
        const productPrice = parseInt(this.querySelector("#price").textContent);

        const cartDetails = `${productName} $${productPrice}`;

        handleCardCount();
        updateCart(cartDetails);
        updateTotal(productPrice);
    });
});

function handleCardCount() {
    cartCount += 1;
    document.querySelector("#cart-count").innerHTML = cartCount;
}

function updateCart(info) {
    const details = document.createElement('li');
    details.innerHTML = info;
    cartList.appendChild(details);
}

function updateTotal(price) {
    total += price;
    totalPrice.innerHTML = total;
}

cart.addEventListener('click', () => {
    target.scrollIntoView({ behavior: "smooth" });
});
