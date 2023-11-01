res = sumDigits(1234);
console.log(`res = ${res}`);

reslucky = luckyNumber(386683);
console.log(reslucky ? 'Lucky' : 'Unlucky');

banana = getBanana();
console.log(banana);

function sumDigits(x) {
    let res = 0;
    let str = String(x);
    for (let i = 0; i < str.length; i++) {
        res += Number(str[i]);      
    }
    return res;
}

function luckyNumber(x) {
    let num1 = x % 1000;
    let num2 = x -  num1;
    let summ_num1 = sumDigits(num1);
    let summ_num2 = sumDigits(num2);
    return summ_num1 == summ_num2;
}

function getBanana() {
    let res = '';
    let a = 'a';
    let b = 'b';
    for (let i = 0; i < 6; i++) {
        even = i % 2;
        res += i == 0 ? b : 0 < even ? a : 'n';      
    }
    return res;
}

