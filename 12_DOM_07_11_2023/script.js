// setInterval(printTime, 1000);

// function printTime() {
//     const date = new Date();
//     const h = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
//     const m = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
//     const s = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
//     const t = `${h} : ${m} : ${s}`;

//     time.textContent = t;

//     time.style.margin = '10px auto 0';
//     time.style.width = 'fit-content';
// }

// HOMEWORK

const input = document.getElementById('taskInput');
const button = document.getElementById('addTask');
const list = document.getElementById('taskList');

list.addEventListener('click', (e) => {
    // console.log(e);
    if (e.target.tagName === 'BUTTON') {
        // console.log('We clicked on button');
        e.target.parentElement.remove();
    }
    if (e.target.checked) {
        // console.log(e);\
        e.target.previousElementSibling.style.textDecoration = 'line-through';
    } else {
        e.target.previousElementSibling.style.textDecoration = 'none';
    }
})

const addTask = () => {
    // Значение введённое в инпут
    const task = input.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span><input type='checkbox'><button>Delete</button>
        `;
        list.appendChild(li);
    };
    input.value = '';
}

button.onclick = addTask;
// button.addEventListener('click', addTask);