const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const usersBtn = document.getElementById('loadUsersBtn');
const userList = document.getElementById('userList');
const details = document.getElementById('userDetails');
const postList = document.getElementById('postList');

usersBtn.addEventListener('click', async () => {
    const users = await fetchUsers();
    displayUsers(users);
    const posts = await fetchPosts();
    displayPosts(posts);
})

async function fetchUsers() {
    try {
        const response = await fetch(`${BASE_URL}users`);
        const users = await response.json();
        return users;
    } catch (error) {
        console.log(error);
    };
};

function displayUsers(users) {
    userList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.classList.add('li');
        li.textContent = user.name;
        li.addEventListener('click', () => displayUserDetails(user));
        userList.appendChild(li);
    })
}

function displayUserDetails({ name, email, phone, website, company: { name: brand }, address: { city, street, suite } }) {
    const phoneFormatted = phone.split(' ')[0];
    details.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email: </strong>${email}</p>
        <p><strong>Phone: </strong>${phoneFormatted}</p>
        <p><strong>Website: </strong>${website}</p>
        <p><strong>Company: </strong>${brand}</p>
        <p><strong>Address: </strong>${city} ${street} ${suite}</p>
    `;
}

async function fetchPosts() {
    try {
        const response = await fetch(`${BASE_URL}posts`);
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.log(error);
    };
};

function displayPosts(posts) {
    postList.innerHTML = '';
    posts.forEach(({ title, body }) => {
        const li = document.createElement('li');
        li.innerHTML = `
      <h4>${title}</h4>
      <p>${body}</p>
    `;
        postList.appendChild(li);
    })
};
