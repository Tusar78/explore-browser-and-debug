// Slider image container
const images = [
    './assets/images/img1.jpg',
    './assets/images/img2.jpg',
    './assets/images/img3.jpg',
    './assets/images/img4.jpg',
    './assets/images/img5.jpg',
    './assets/images/img6.jpg',
    './assets/images/img7.jpg',
    './assets/images/img8.jpg'
]

let imgIndex = 0;
const sliderImg = document.getElementById('slider-img');
const imgNumbered = document.getElementById('img-number');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0
    } 
    sliderImg.setAttribute('src', images[imgIndex]);    
    imgIndex++;
    imgNumbered.innerText = `${imgIndex} / ${images.length}`    
}, 1000);