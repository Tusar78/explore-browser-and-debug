function displayContent() {
    console.log('I am JavaScript function');
}
console.log('First: I am first');
console.log('Second: I am second');
// setTimeout(function() {
//     console.log('I am tusar');
// }, 1000)

setTimeout(() => {
    console.log('Arrow function');
}, 4000);
console.log('Third: I am third');
console.log('Fourth: I am Fourth');