const displayLocalStorageProduct = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name)
    }
}
const addItem = () => {
    const inputField = document.getElementById('product-name');
    const name = inputField.value;
    inputField.value = '';
    displayProduct(name);
    productToCart(name)
}

const displayProduct = name => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = name;
    productContainer.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}

const productToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1;
    }
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const placeOrder = () => {
    document.getElementById('product-container').textContent = '';
    localStorage.removeItem('cart')
}

displayLocalStorageProduct()