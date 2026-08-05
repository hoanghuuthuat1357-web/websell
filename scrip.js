let cart = 0;

function addToCart() {
    cart++;

    document.getElementById("cart-count").textContent = cart;

    alert("Đã thêm sản phẩm vào giỏ hàng!");
const products = [
    "images/sp1.jpg",
    "images/sp2.jpg",
    "images/sp3.jpg"
];

let current = 0;

function showProduct() {
    document.getElementById("productImage").src = products[current];
}

function nextProduct() {
    current++;

    if (current >= products.length) {
        current = 0;
    }

    showProduct();
}

function prevProduct() {
    current--;

    if (current < 0) {
        current = products.length - 1;
    }

    showProduct();
}

setInterval(nextProduct, 3000);
}
