function getFiveAfterSevenSec() {
    setTimeout(() => {
        return 5;
    }, 7000);
};

let res = getFiveAfterSevenSec();
console.log(res);

console.log("PROMISE");

let promise = new Promise(function(res, rej) {
    setTimeout(() => {
        rej(new Error('Error'));
    }, 7000);
});

console.log(promise);

promise
    .then(value => value + 5).then(newValue => console.log(newValue))
    .catch(err => console.log(err))
    .finally(console.log('Напечатаем данный текст при любом исходе'))