const search = () => {
    const searchBox = document.getElementById('Search-item').value.toUpperCase();
    const productList = document.getElementById('product-list');
    const products = productList.getElementsByClassName('product1');

    for (let i = 0; i < products.length; i++) {
        let productName = products[i].getElementsByTagName('h2')[0];
        if (productName) {
            let text = productName.textContent || productName.innerText;
            if (text.toUpperCase().indexOf(searchBox) > -1) {
                products[i].style.display = ""; // إظهار العنصر
            } else {
                products[i].style.display = "none"; // إخفاء العنصر
            }
        }
    }
}
let cart = [];

// وظيفة لإضافة عنصر إلى السلة
function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
    alert(`تم إضافة ${productName} إلى السلة.`);
}

// وظيفة لتحديث واجهة المستخدم
function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = ''; // مسح قائمة السلة الحالية
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} (الكمية: ${item.quantity})`;
        cartList.appendChild(li);
    });
}

// وظيفة لمسح السلة
function clearCart() {
    cart = [];
    updateCart();
    alert("تم حذف جميع المنتجات من السلة.");
}