// Assignment 20: Домашнее задание. AJAX. Часть №1
// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.

// Assignment 21: Домашнее задание. AJAX. Часть №2
// Создать форму добавления пользователя состоящую из следующих полей name, email, phone, website. При сабмите формы сделать POST запрос на сервер https://jsonplaceholder.typicode.com/users После ответа от сервера добавлять полученного пользователя на страницу в список.Для визуализации формы и спискаможете использовать произвольные стили.

const apiUrl = 'https://jsonplaceholder.typicode.com/'
// UI ELements
const container = document.querySelector('.container-users');
const containerUserInfo = document.querySelector('.container-user-info');

const form = document.forms['add-user'];
const inputUserName = form.elements['user-name']
const inputUserEmail = form.elements['user-email']
const inputUserPhone = form.elements['user-phone']
const inputUserWebsite = form.elements['user-website']

// Events
form.addEventListener('submit', onFormSubmitHendler)

function getUsers(callback) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${apiUrl}users`);
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText)
        callback(response);
    });

    xhr.addEventListener('error', () => {
        console.log('error')
    })

    xhr.send();
}

function createUser(body, callback) {
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    xhr.open('POST', `${apiUrl}users`);
    xhr.addEventListener('load', () => {
        // console.log(xhr.responseText);
        const response = JSON.parse(xhr.responseText);
        // console.log(response);
        callback(response)
    });

    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')

    xhr.addEventListener('error', () => {
        console.log('error')
    });

    xhr.send(JSON.stringify(body));
};

function cardTemplate(user) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const title = document.createElement('a');
    title.classList.add('btn', 'btn-primary');
    title.textContent = user.name;
    cardBody.appendChild(title);
    card.appendChild(cardBody);
    return card;
}

function renderUser(response) {
    // console.log(response);
    const fragment = document.createDocumentFragment();
    response.forEach(user => {
        // console.log(user);
        const card = cardTemplate(user)
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
                    console.log(item)

                    const card = document.createElement('div');
                    card.classList.add('card');
                    const cardBody = document.createElement('div');
                    cardBody.classList.add('card-body');

                    const subTitle = document.createElement('h6');
                    subTitle.classList.add('card-title');
                    subTitle.textContent = item.name;

                    const title = document.createElement('h5');
                    title.classList.add('card-title');
                    title.textContent = item.username;

                    const text = document.createElement('p');
                    text.classList.add('card-text');
                    text.textContent = item.company.catchPhrase;

                    cardBody.appendChild(subTitle);
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

function onFormSubmitHendler(e) {
    e.preventDefault();

    const userName = inputUserName.value.trim();
    const userEmail = inputUserEmail.value.trim();
    const userPhone = inputUserPhone.value.trim();
    const userWebsite = inputUserWebsite.value.trim();

    if (!userName || !userEmail || !userPhone || !userWebsite) {
        alert('Заполните все поля')
        return;
    }

    const newUser = {
        name: userName,
        email: userEmail,
        phone: userPhone,
        website: userWebsite,
    }

    inputUserName.value = '';
    inputUserEmail.value = '';
    inputUserPhone.value = '';
    inputUserWebsite.value = '';

    createUser(newUser, response => {
        console.log(response);
        const user = cardTemplate(response);
        container.insertAdjacentElement('afterbegin', user)
    })

}

getUsers(renderUser);