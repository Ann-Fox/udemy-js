function customHttp() {
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
// init http module
const http = customHttp();

const newServece = (function () {
    const apiKey = 'e386b408a09a4e3484421507f747e746';
    const apiUrl = 'https://newsapi.org/v2';

    return {
        topHeadlines(country = 'ua', cb) {
            http.get(`${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`, cb)
        },
        everything(query, cb) {
            http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}
`, cb)
        },
    }
})();

// Element UI
const form = document.forms['newsControls'];
const countrySelect = form.elements['country'];
const searchInput = form.elements['search']

form.addEventListener('submit', (e) => {
    e.preventDefault();
    loadNews();
});

// init selects
document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
    loadNews()
})

// Load news function (загрузка всех новостей)
function loadNews() {
    showLoader();

    const country = countrySelect.value;
    const searchText = searchInput.value;

    if (!searchText) {
        newServece.topHeadlines(country, onGetRasponse)
    } else {
        newServece.everything(searchText, onGetRasponse)
        console.log(searchText);
    }

}

// Function on get response from server (получить одну новость от сервера)
function onGetRasponse(error, response) {
    console.log(response);
    // console.log(response.articles);
    if (error) {
        showAlert(error, 'red darken-3'); // css класс для оформления ошибки
        return;
    }
    // если по запросу пользователя ничего не найдено, показать сообщение, что новостей нет по его запросу (по вашему запросу ничего не найдено)
    if (!response.articles.length) {
        // show empty msg
        console.log(response.articles.length);
        return;
    }

    renderNews(response.articles)
}

// function render news
function renderNews(news) {
    removeLoader();
    const newsContainer = document.querySelector('.news-container .row');

    if (newsContainer.children.length) {
        clearContainer(newsContainer)
    }
    // console.log(newsContainer);
    let fragment = '';
    news.forEach(newsItem => {
        // console.log(newsItem);
        const el = newTemplate(newsItem);
        fragment += el
    })
    // console.log(fragment);
    newsContainer.insertAdjacentHTML('afterbegin', fragment)
}

// News item template function
function newTemplate({ urlToImage, title, url, description }) {
    return `
        <div class="col s12">
            <div class="card">
                <div class="card-image">
                    <img src="${urlToImage}" alt="" srcset="" />
                    <span class="card-title">${title || ''}</span>
                </div>
                <div class="card-content">
                    <p>${description}</p>
                </div>
                <div class="card-action">
                    <a href="${url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
    `
}

function showAlert(msg, type = 'success') {
    // console.log(msg, type);
    M.toast({ html: msg, classes: type });
}


// function clear container (очистка контейнера при выборе новостей)
function clearContainer(container) {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child)
        child = container.lastElementChild
    }
}

// show loader function
function showLoader() {
    document.body.insertAdjacentHTML('afterbegin',
        `
         <div class="progress m-0 fixed">
            <div class="indeterminate"></div>
        </div>
  `
    )
}

// remove loader function
function removeLoader() {
    const loader = document.querySelector('.progress');
    if (loader) {
        // console.log(loader);
        loader.remove();
    }
}