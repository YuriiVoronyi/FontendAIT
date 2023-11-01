let x;
console.log(x); // undefined

x = 7; // Number
x = 'bye'; // String

console.log(x);

const pi = 3.1415926;
// pi = 3.14; Пример ошибки с переопределением значения константы

let y = x;
console.log(y);

console.log("pi = " + pi);
console.log(`pi = ${pi}`);

const exp = pi;

console.log("exp = " + exp + " or " + pi);
console.log(`exp = ${exp} or ${pi}`);

x = true;
console.log(x);

x = null;

// Пример конкатенации (склеивание частей в одну строку)
let res = 'true' + 5; // 'true5'
console.log(res);

res = true + 5;  // boolean => number   true = 1, false = 0
console.log(res);

res = 5;
console.log(res);
console.log(res + '') // '5'       console.log(String(res));
console.log(typeof res);

res = '5a';
console.log(res);
console.log(+res);  // NaN (Not a number) console.log(Number(res));

console.log(parseInt('5a')); // 5
console.log(+'5a'); // NaN
console.log(Number('5a')) // NaN

console.log(typeof res);
console.log(typeof +res);


//  = == ===

// Нестрогое сравнение (сравниваются значения без учёта типов данных переменных)
x = '2' == 2;
console.log(x);

// Строгое сравнение (сравниваются значения с учётом типов данных переменных)
x = '2' === 2;
console.log(x);

res = 7 % 2;
console.log(res);

res = 0;

switch (res) {
    case 1:
        console.log(`number: ${res}`);
        break;
    case '1':
        console.log(`string: ${res}`);
        break;
    default:
        console.log('It\'s not a 1');
        break;
}

let age = 16;
let vol = age > 16 ? 42 : 1.5;

x = 10;
res = x++ + ++x; // 10 + 12 = 22
console.log(res);
console.log(x);

// false = 0, '', null, NaN, undefined
x = !!x      //  Boolean(x);
console.log(x);

let example = 'hello';
console.log(!!example);

// HomeWork

res = sumDigits(1234); // 1 + 2 + 3 + 4 = 10
console.log(`res = ${res}`);

res = luckyNumber(123871); // 1 + 2 + 3 == 8 + 7 + 1
console.log(res ? 'Lucky' : 'Unlucky');

// BASIC
function sumDigits(x) { // Возвращает сумму цифр числа
    // TODO
}

function luckyNumber(x) { // Сравнивает сумму цифр первой половины числа со второй
    // TODO
}

// ADVANCED
function banana() {
    let a = 'a';
    let b = 'b';
    // TODO: 'b', 'a' => banana
}