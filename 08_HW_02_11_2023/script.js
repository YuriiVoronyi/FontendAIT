res = sumDigits(1234); // 1 + 2 + 3 + 4 = 10
console.log(`res = ${res}`);

res = luckyNumber(123411); // 1 + 2 + 3 == 8 + 7 + 1
if (res === 'Wrong number!') {
    console.log('Wrong number!');
} else {
    console.log(res ? 'Lucky' : 'Unlucky');
}


// BASIC
function sumDigits(x) { // Возвращает сумму цифр числа
    // TODO
    let sum = 0;

    // 1234
    while (x) {
        // Аккумулируем в sum остаток от деления на 10 (т.е. последнюю цифру числа)
        sum += x % 10;
        // Отбрасываем последнюю цифру от числа
        x = (x - x % 10) / 10; 
    }

    return sum;
}

function luckyNumber(x) { // Сравнивает сумму цифр первой половины числа со второй
    // TODO
    // 123456 / 1000 = 123.456
    // (123456 - 456) / 1000= 123
    if ((x+'').length === 6) {
        const secondHalf = x % 1000;
        const firstHalf = (x - secondHalf) / 1000;
        return sumDigits(firstHalf) === sumDigits(secondHalf);
    } else {
        return 'Wrong number!';
    }
}

// ADVANCED
function banana() {
    let a = 'a';
    let b = 'b';
    console.log((b + a + +a + a).toLowerCase());
    // TODO: 'b', 'a' => banana
}

banana();


function returnNumber(x) { // 4   ||    7
    // if (x == 4) {
    //     return 7;
    // } else {
    //     return 4;
    // }

    // return x == 4 ? 7 : 4

    // return 11 - x;
    
    return 28 / x;
}