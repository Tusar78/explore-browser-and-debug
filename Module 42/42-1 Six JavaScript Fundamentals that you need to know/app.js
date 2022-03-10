const products = [
    {price: 32000, brand: 'Samsung', color: 'Silver'},
    {price: 35000, brand: 'Oppo', color: 'black'},
    {price: 22000, brand: 'Xiaomi', color: 'grossy blue'},
    {price: 42000, brand: 'Google', color: 'white'},
    {price: 82000, brand: 'Apple', color: 'Shade gray'},
    {price: 47000, brand: 'Redmi', color: 'Golden'},
]

const brands = products.map(products => products.brand)
console.log(brands);

products.forEach(product => {
    console.log(product);
})

const cheap = products.filter(product => {
    return product.price < 50000;
})

console.log(cheap);

const individualPhone = products.filter(product => {
    return product.brand.toLowerCase().includes('o')
})
console.log(individualPhone);

const special = products.find(product => {
    return product.brand.toLowerCase().includes('o');
})

console.log(special);