// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.
const container = document.querySelector('.container-users');
const containerUserInfo = document.querySelector('.container-user-info');
// container.style.width = '18rem'
console.log(containerUserInfo)

function getUsers(callback) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText)
        callback(response);
    });

    xhr.addEventListener('error', () => {
        console.log('error')
    })

    xhr.send();
}

function renderUser(response) {
    // console.log(response);
    const fragment = document.createDocumentFragment();
    response.forEach(user => {
        // console.log(user);
        const card = document.createElement('div');
        card.classList.add('card');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        const title = document.createElement('a');
        title.classList.add('btn', 'btn-primary');
        title.textContent = user.name;
        cardBody.appendChild(title);
        card.appendChild(cardBody);
        fragment.appendChild(card);
    });
    container.appendChild(fragment);

    container.addEventListener('click', (event) => {
        // console.log(event.target.tagName)
        containerUserInfo.innerHTML = '';
        // console.log(containerUserInfo)
        if ((event.target.tagName).toLowerCase() === 'a') {
            // console.log(event.target.innerHTML)
            // console.log(response)
            response.filter(function (item) {
                if (item.name === event.target.innerHTML) {
                    // console.log(item.name)
                    // console.log(item)

                    const card = document.createElement('div');
                    card.classList.add('card');
                    const cardBody = document.createElement('div');
                    cardBody.classList.add('card-body');
                    const title = document.createElement('h5');
                    title.classList.add('card-title');
                    title.textContent = item.username;
                    const text = document.createElement('p');
                    text.classList.add('card-text');
                    text.textContent = item.company.catchPhrase;

                    cardBody.appendChild(title);
                    cardBody.appendChild(text)
                    card.appendChild(cardBody);
                    fragment.appendChild(card);
                    containerUserInfo.appendChild(fragment)
                }
            })
        };

    })
}

getUsers(renderUser);