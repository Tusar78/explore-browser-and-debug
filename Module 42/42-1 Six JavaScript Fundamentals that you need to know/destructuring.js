// const mobilePrice = [13500, 17800];
// const [OppoA3s, OppoA5s] = mobilePrice;
// console.log(OppoA3s);

const myFunc = (num1, num2) => {
    const arr = [num1, num2];
    return arr;
}

const [rakibAge, tusarAge] = myFunc(28, 22);
console.log(rakibAge);

// Object array destructuring
const person = {
    name: 'Tusar',
    age: 22,
    friends: ['Sharif', 'Selim', 'Taher']
}

const [frnd1, frnd2] = person.friends;
console.log(frnd1, frnd2);

const {namee, friends, age} = person;
console.log(friends);

const employee = {
    ide: 'VS Code',
    designation: 'developer', 
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specifications: {
        height: 66,
        weight: 70,
        address: 'Kushtia',
        drink: 'water'
    }
}

const {machine, ide} = employee;
const {address, drink} = employee.specifications;
console.log(machine, ide);
console.log(address);