const addItem = () => {
    const inputField = document.getElementById('product-name');
    const name = inputField.value;
    inputField.value = '';
    displayProduct(name);
}

const displayProduct = name => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = name;
    productContainer.appendChild(li);
}