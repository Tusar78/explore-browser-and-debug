// const student = {
//     name: 'Tusar',
//     age: 22,
//     movies: ['KGF', 'Pushpa', 'Bahubali']
// }
// const studentJSON = JSON.stringify(student);
// console.log(student);  
// console.log(studentJSON);  

// const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// const keys = Object.keys(student);
// console.log(keys);
// const values = Object.values(student);
// console.log(values);


const products = [
    {price: 32000, brand: 'Samsung', color: 'Silver'},
    {price: 35000, brand: 'Oppo', color: 'black'},
    {price: 22000, brand: 'Xiaomi', color: 'grossy blue'},
    {price: 42000, brand: 'Google', color: 'white'},
    {price: 82000, brand: 'Apple', color: 'Shade gray'},
    {price: 47000, brand: 'Redmi', color: 'Golden'},
]

const newProduct = {
    price: 178000,
    brand: 'Apple iPhone 13 Pro',
    color: 'black'
}

const myProducts = [...products, newProduct];
console.log(myProducts);

const remaining = products.filter(product => {
    return product.brand !== 'Oppo';
})

remaining.forEach(val => {
    console.log(val);
})