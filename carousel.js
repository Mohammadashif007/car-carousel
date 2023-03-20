const images = [
    'images/car-1.jpg',
    'images/car-2.jpg',
    'images/car-3.jpg',
    'images/car-4.jpg',
    'images/car-5.jpg',
    'images/car-6.jpg',
    'images/car-7.jpg',
    'images/car-8.jpg',
    'images/car-9.jpg',
    'images/car-10.jpg'
];

let imagesIndex = 0;

const imgId = document.getElementById('slider-img');

setInterval( () => {
    if(imagesIndex === images.length){
        imagesIndex = 0;
    }
    const imageUrl = images[imagesIndex];
    console.log(imagesIndex, imageUrl);
    imgId.setAttribute('src', imageUrl);
    imagesIndex++;
}, 2500)