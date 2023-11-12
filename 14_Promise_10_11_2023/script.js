
const list = document.getElementById('userList');
const details = document.getElementById('userDetails');

fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        users.forEach(user => {
            const li = document.createElement('li');
            li.classList.add('li');
            li.textContent = user.name;
            // () => displayUserDetails(user)  |||  displayUserDetails(user) ||| displayUserDetails
            li.addEventListener('click', () => displayUserDetails(user));
            list.appendChild(li);
        })
      })
      .catch(err => {
        const li = document.createElement('li');
        li.textContent = err;
        list.appendChild(li);
      })
      .finally(console.log('Finish'));

function displayUserDetails({name, email, phone, website, company: {name: brand}, address: {city, street, suite}}) {
    details.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email: </strong>${email}</p>
        <p><strong>Phone: </strong>${phone}</p>
        <p><strong>Website: </strong>${website}</p>
        <p><strong>Company: </strong>${brand}</p>
        <p><strong>Address: </strong>${city} ${street} ${suite}</p>
    `;
}