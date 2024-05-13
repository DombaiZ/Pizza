let totalPrice = 0;

function addToCart(pizzaName, price) {
    const cartItems = document.getElementById("cart-items");
    const li = document.createElement("li");
    li.textContent = pizzaName + " - $" + price;
    cartItems.appendChild(li);
    totalPrice += price;
    updateTotal();
}


function updateTotal() {
    const totalElement = document.getElementById("total");
    totalElement.textContent = "Összesen: $" + totalPrice;
}

function order() {
    const cartItems = document.getElementById("cart-items");
    if (cartItems.children.length === 0) {
        alert("A kosár üres!");
    } else {
        alert("Köszönjük a rendelést! A szállítás hamarosan megérkezik. Összesen: $" + totalPrice);
        cartItems.innerHTML = "";
        totalPrice = 0;
        updateTotal();
    }
}
