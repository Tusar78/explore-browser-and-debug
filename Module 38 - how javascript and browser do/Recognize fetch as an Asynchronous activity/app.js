console.log(111);
console.log(222);
setTimeout(() => {
    console.log('aaa');
}, 1000);
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data))
console.log(333);
console.log(444);
for (let i = 0; i < 100; i++) {
    console.log(i);
}