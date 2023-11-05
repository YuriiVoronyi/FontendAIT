let arr = [1, 2, 3, 'four', 'five'];
console.log(arr);
console.log(typeof arr);

// Метод push() меняет исходный массив, добавляя элемент(-ы) в конец массива
// и возвращает новую длину массива
console.log('==========  PUSH  ===========');
let res = arr.push(6, 7, 8);

// Распечатывается обновлённый массив ([1, 2, 3, 'four', 'five', 6, 7, 8])
console.log(arr);
// Распечатывается новая длина массива (8)
console.log(res);

// Метод pop() меняет исходный массив, удаляя последний элемент массива
// и возвращает удалённый элемент
console.log('==========  POP  ===========');
res = arr.pop();

// Распечатывается обновлённый массив ([1, 2, 3, 'four', 'five', 6, 7])
console.log(arr);
// Распечатывается удалённый элемент (8)
console.log(res);

// Метод shift() меняет исходный массив, удаляя первый элемент массива
// и возвращает удалённый элемент
console.log('==========  SHIFT  ===========');
res = arr.shift();

// Распечатывается обновлённый массив ([2, 3, 'four', 'five', 6, 7])
console.log(arr);
// Распечатывается удалённый элемент (1)
console.log(res);

// Метод unshift() меняет исходный массив, добавляя элемент(-ы) в начало массива
// и возвращает новую длину массива
console.log('==========  UNSHIFT  ===========');
res = arr.unshift(0, 1);

// Распечатывается обновлённый массив ([0, 1, 2, 3, 'four', 'five', 6, 7])
console.log(arr);
// Распечатывается новая длина массива (8)
console.log(res);

// Метод concat() не меняет оригинал массива! Возвращает новый объединённый массив
console.log('==========  CONCAT  ===========');

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
res = arr1.concat(arr2);

console.log(res); // [1, 2, 3, 4, 5, 6]
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [4, 5, 6]

// Метод slice() не меняет оригинал, возвращает новый массив
console.log('==========  SLICE  ===========');
res = arr.slice(5, 7);

console.log(res); // ['five', 6]
console.log(arr); // [0, 1, 2, 3, 'four', 'five', 6, 7]

// Метод splice() меняет оригинал, возвращает новый массив
console.log('==========  SPLICE  ===========');
res = arr.splice(1, 4);

console.log(res); // [1, 2, 3, 'four']
console.log(arr); // [0, 'five', 6, 7]

// Поверхностное копирование (примитивы хранятся в переменных по ЗНАЧЕНИЮ,
// а object по ССЫЛКЕ на место в памяти, где хранятся данные)
let arrCopy = arr1;

console.log(arr1);
console.log(arrCopy);
arr1[0] = 1000;

console.log(arr1); // [1000, 2, 3]
console.log(arrCopy); // [1000, 2, 3]

console.log('==========  SPREAD  ===========');
// Глубокое копирование
let arrTrueCopy = [...arr1];

console.log(arrTrueCopy);
console.log(arr1);
arr1[0] = 1;

console.log(arrTrueCopy);
console.log(arr1);



let obj = {
    userName: 'John',
    age: 14
}

let objCopy = {...obj};

obj.age = 18;

console.log(obj);
console.log(objCopy);

obj = {
    userName: 'John',
    age: 14,
    nationality: 'Poland',
    sex: 'male',
    dateOfBirth: '31.08.2009'
};

objCopy = {...obj, age: 20, userName: 'Peter'};

console.log(obj);
console.log(objCopy);