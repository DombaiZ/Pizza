let totalPrice = 0;

function updateTotal() {
}

function addToCart(name, price) {
    const cartItems = document.getElementById("cart-items");
    const item = document.createElement("div");
    item.textContent = `${name} - $${price}`;
    cartItems.appendChild(item);
    totalPrice += price;
    updateTotal();
}

fetch("https://pizza.kando-dev.eu/Pizza")
    .then(function (res) {
        return res.json();
    })
    .then(function (datas) {
        console.log(datas);
        let content = document.getElementById("pizza-menu");
        for (const data of datas) {
            let price = Math.floor(Math.random() * (20 - 8 + 1)) + 8;
            content.innerHTML += `      
            <div class="pizza">
                <img src="${data.kepURL}" alt="${data.name}">
                <h3>${data.name}</h3>
                <p class="price">Ár: $${price}</p>
                <button onclick="addToCart('${data.name}', ${price})">Kosárba</button>
            </div>`;
        }
    });

function order() {
    const cartItems = document.getElementById("cart-items");
    const orderMessage = document.getElementById("order-message");
    
    if (cartItems.children.length === 0) {
        alert("A kosár üres!");
    } else {
        orderMessage.textContent = "Köszönjük a rendelést! A szállítás hamarosan megérkezik. Összesen: $" + totalPrice;
        orderMessage.classList.remove("hidden");
        orderMessage.classList.add("visible");

        setTimeout(function() {
            orderMessage.classList.remove("visible");
            orderMessage.classList.add("hidden");
        }, 5000);

        cartItems.innerHTML = "";
        totalPrice = 0;
        updateTotal();
    }
}
