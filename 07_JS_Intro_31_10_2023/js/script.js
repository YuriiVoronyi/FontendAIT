console.log('Hello world!');
console.log(5+4);
console.log('9');
console.log(document.body);
/*
   Блочная область видимости
1. const - константа (не может быть переопределена)
2. let - классическая переменная, если надо ее переопределить
    Глобальная область видимости
3. var (deprecated, устарело)
*/ 
let a = 10;
console.log(a);

a = '15';
console.log(a);

// const b = 10;
// console.log(b);

// b = 5; Нельзя переопределить константу.
// console.log(b);

const div1 = document.getElementById('div1');
console.log(div1);

console.log(div1.style.border);//Значение свойства border

div1.style.border = '1px solid black';

console.log(div1.style.border);

const div1Query = document.querySelector('#div1');
console.log(div1Query);

const pDiv1 = document.querySelectorAll('#div1 > p');
console.log(pDiv1);

for(let i = 0; i < pDiv1.length; i++) {
    pDiv1[i].innerHTML = `<span>new text ${i + 1}</span>`;// Внутри строки обращаемся к переменной i
}

const children = div1.children;
console.log(children.length);

for (let i = 0; i < children.length; i++) {
    children[i].style.color = 'red';   
};

const newP = document.createElement('p');
console.log(newP);

const newPText = document.createTextNode('Этот текст был создан спец. методом');
newP.appendChild(newPText);

div1.appendChild(newPText);// insertBefore() - в начало



// HomeWork
const t = setInterval(move, 20);
let pos = 0;
let direction = 1;

const box = document.getElementById('box');

function move() {
    pos += direction;

    if (pos >= 150 || pos <= 0) {
        direction *= -1;
    } 
    box.style.top  = pos + 'px';
    box.style.left = pos + 'px';
}










