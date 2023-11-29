//https://jsonplaceholder.typicode.com/users
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(users => console.log(users));

async function init() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    //console.log(users);
    display(users);
}

function display(users) {
    const result = document.querySelector("#result");
    let string = '';
    users.forEach(user => {
        string += `<table>
                    <tr><th>이름</th><td>${user.name}</td></tr>
                    <tr><th>ID</th><td>${user.username}</td></tr> 
                    <tr><th>E-mail</th><td>${user.email}</td></tr>
                    </table>`;
    });
    result.innerHTML = string;
}

init();