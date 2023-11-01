const title = document.getElementById('title');
let flag = true;
const clicked = 'You clicked button';
const unClicked = 'Welcome to my page!';

// console.log(title);

function changeTitle() {
    // if (flag) { // true  'true'
    //     title.textContent = clicked;
    // } else {
    //     title.textContent = unClicked;
    // }
    
    title.textContent = flag ? clicked : unClicked;

    flag = !flag
}

// Carousel

const images = [
    "./Images/Rouen_Cathedral_1.jpg",
    "./Images/Rouen_Cathedral_2.jpg",
    "./Images/Rouen_Cathedral_3.jpg",
    "./Images/Rouen_Cathedral_4.jpg",
    "./Images/Rouen_Cathedral_5.jpg",
    "./Images/Rouen_Cathedral_6.jpg"
];

const btnPrev = document.getElementById('prev');
const elemPicture = document.getElementById('picture');
const btnNext = document.getElementById('next');

btnPrev.onclick = prevHandler;
btnNext.onclick = nextHandler;

let index = 0;

function prevHandler() {
    index--;
    if (index == -1) {
        index = images.length - 1;
    }
    elemPicture.src = images[index];
    elemPicture.alt = index + 1;
}

function nextHandler() {
    index++;
    if (index == images.length) {
        index = 0;
    }
    elemPicture.src = images[index];
    elemPicture.alt = index + 1;
}