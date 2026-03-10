const btn = document.querySelector('button');
const container = document.querySelector('.container');

function getPosts(callback) {
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.addEventListener('load', () => {
        // console.log(xhr.responseText);
        const response = JSON.parse(xhr.responseText);
        // console.log(response);
        callback(response)
    });

    xhr.addEventListener('error', () => {
        console.log('error')
    });

    xhr.send();
};

function renderPost(response) {
    const fragment = document.createDocumentFragment();

    response.forEach(post => {
        // console.log(post);
        const card = document.createElement('div');
        card.classList.add('card');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = post.title;
        const body = document.createElement('p');
        body.classList.add('class-text');
        body.textContent = post.body;
        cardBody.appendChild(title);
        cardBody.appendChild(body);
        card.appendChild(cardBody)
        fragment.appendChild(card)
        // console.log(fragment)
    });
    container.appendChild(fragment)
}

btn.addEventListener('click', () => {
    getPosts(renderPost)
})
