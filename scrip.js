let cart = 0;

function addToCart() {
    cart++;

    document.getElementById("cart-count").textContent = cart;

    alert("Đã thêm sản phẩm vào giỏ hàng!");
}
