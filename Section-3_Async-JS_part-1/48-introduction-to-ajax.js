const btn = document.querySelector('.btn-get-posts');
const btnAddNewPost = document.querySelector('.btn-add-post');
const container = document.querySelector('.container');

function getPosts(callback) {
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        callback(response)
    });

    xhr.addEventListener('error', () => {
        console.log('error')
    });

    xhr.send();
};

function createPost(body, callback) {
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
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

function cardTemplate(post) {
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
    return card;
}

function renderPost(response) {
    const fragment = document.createDocumentFragment();

    response.forEach(post => {
        // console.log(post);
        const card = cardTemplate(post)
        fragment.appendChild(card)
        // console.log(fragment)
    });
    container.appendChild(fragment)
}

btn.addEventListener('click', () => {
    getPosts(renderPost)
})

btnAddNewPost.addEventListener('click', (e) => {
    console.log(e.target);
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }

    createPost(newPost, response => {
        const post = cardTemplate(response)
        container.insertAdjacentElement('afterbegin', post)
    })

})

// CORS
function getGmail(callback) {
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    xhr.open('GET', 'http://gmail.com');
    xhr.addEventListener('load', () => {
        console.log(xhr.responseText);

    });

    xhr.addEventListener('error', () => {
        console.log('error')
    });

    xhr.send();
};

function myHttpRequest({ method, url } = {}, callback) {
    try {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.addEventListener('load', () => {
            if (Math.floor(xhr.status / 100) !== 2) {
                callback(`Error. Status code: ${xhr.status}`, xhr);
                return;
            }
            const response = JSON.parse(xhr.responseText);
            callback(null, response);
        });

        xhr.addEventListener('error', () => {
            callback(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
    } catch (error) {
        callback(error);
    }
};

// myHttpRequest(
//     {
//         method: 'GET',
//         url: 'https://jsonplaceholder.typicode.com/posts'
//     }, (error, response) => {
//         if (error) {
//             console.log(error);
//             return;
//         }
//         console.log(response);
//     })

function http() {
    return {
        get(url, callback) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        callback(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    callback(null, response);
                });

                xhr.addEventListener('error', () => {
                    callback(`Error. Status code: ${xhr.status}`, xhr);
                });

                xhr.send();
            } catch (error) {
                callback(error);
            }
        },
        post(url, body, headers, callback) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        callback(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    callback(null, response);
                });

                xhr.addEventListener('error', () => {
                    callback(`Error. Status code: ${xhr.status}`, xhr);
                });

                if (headers) {
                    console.log(headers);
                    console.log(Object.entries(headers))
                    Object.entries(headers).forEach(([key, value]) => {
                        xhr.setRequestHeader(key, value);
                        console.log(key, value);
                    })
                }

                xhr.send(JSON.stringify(body));
            } catch (error) {
                callback(error);
            }
        },
    }
}

const myHttp = http();
myHttp.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
        title: 'foo',
        body: 'bar',
        userId: 1
    },
    {
        'Content-type': 'application/json; charset=UTF-8',
        'x-auth': 'header value',
    },
    (error, response) => {
        console.log(error, response);
    }
)

console.log(myHttp);