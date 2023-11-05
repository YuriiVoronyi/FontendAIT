
let arr = ['one', 'two', 'Three', 'eight', 'tHree', 'thrEE', 'six'];

console.log('===== indexOf =====');
let res = arr.indexOf('three', 3)

console.log(arr); // Исходный массив не изменился
console.log(res); // Индекс искомого элемента в массиве или -1, если такового элемента нет

console.log('===== includes =====');
res = arr.includes('nine');

console.log(arr); // Исходный массив не изменился
console.log(res); // Возвращает true, если такой элемент в массиве есть и false, если такового элемента нет

console.log('===== findIndex =====');
res = arr.findIndex(predicateLength3);

function predicateLength3(_, index) {
    return index >= 2;
}

console.log(arr); // Исходный массив не изменился
console.log(res); // Индекс искомого элемента в массиве или -1, если такового элемента нет

res = arr.findIndex((e, i) => i >= 2 && e.toLowerCase() === 'three');

console.log(arr); // Исходный массив не изменился
console.log(res); // Индекс искомого элемента в массиве или -1, если такового элемента нет

// Regular functions

console.log(multiply(2, 5));

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 5));

// Arrow functions

// console.log(multiplyArrow(2, 5)); ReferenceError

// const multiplyArrow = (a, b) => a * b;
const multiplyArrow = (a, b) => {
    // console.log(this); ключевое слово this не работает
    console.log(a, b);
    return a * b;
};

console.log(multiplyArrow(2, 5));

const human = {
    hobby: 'chess',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith'
}

console.log(john);
console.log(john.hobby);

john.__proto__ = human;

console.log(john);
console.log(john.hobby);
console.log(john.fullName());

Array.prototype.printArray = function() {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
}

const numbers = new Array(2, 3, 5, 7, 11, 13, 17, 19);
console.log(numbers);
numbers.printArray();

const strings = ['one', 'two', 'three'];
strings.printArray();

const person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 40,
    address: {
        country: 'USA',
        city: 'New York',
        house: {
            street: 'Roosevelt',
            number: 111,
            liter: 'a',
            apartment: 16            
        }
    }
}

const {age, firstName: name1} = person;
const {firstName, lastName,address: {city, house: {street, number, liter, apartment}}} = person;
console.log(`Mr.${lastName} ${firstName}: ${street}, ${number+liter}, ${apartment}`);

console.log(name1);

res = Object.keys(person);
console.log(res);

res = Object.values(person);
console.log(res);

res = Object.entries(person);
console.log(res);