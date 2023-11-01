setInterval(move, 20);
let pos = 0;
let flag = true;
const box = document.getElementById('box');

let dir = 1;

function move1() {
    pos += dir;
    
    if (pos == 0 || pos == 150) {
        dir *= -1; // dir = -dir     dir = dir * -1
    }

    box.style.top = pos + 'px';
    box.style.left = pos + 'px'; 
}

function move() {
    // if (pos == 150) {
    //     flag = false;
    //     // box.style.backgroundColor = 'white';
    // }

    // if (pos == 0) {
    //     flag = true;
    //     // box.style.backgroundColor = 'black';
    // }

    flag ? pos++ : pos--;

    if (pos == 0 || pos == 150) {
        flag = !flag;
    }

    // if (flag) {
    //     pos++;
    // } else {
    //     pos--;
    // }

    

    box.style.top = pos + 'px';
    box.style.left = pos + 'px';  
}