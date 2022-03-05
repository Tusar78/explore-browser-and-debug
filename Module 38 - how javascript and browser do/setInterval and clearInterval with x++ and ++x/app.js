// setInterval(function(){
//     let watchid = document.getElementById('watch');
//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     let seconds = date.getSeconds(); 
//     let watch = `${hours} : ${minutes} : ${seconds}`;
//     watch.innerHTML = watchid;
// }, 1000)

let seconds = 0;
let timeId = setInterval(() => {
   console.log(++seconds); 
   if (seconds > 5) {
       clearInterval(timeId)
   }
}, 1000);