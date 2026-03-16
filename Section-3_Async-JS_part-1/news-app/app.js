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
        everything(query, cd) {
            http.get(`${apiUrl}/v2/everything?q=${query}&apiKey=${apiKey}
`, cb)
        },
    }
})();

// init selects
document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
    loadNews()
})

// Load news function (загрузка всех новостей)
function loadNews() {
    newServece.topHeadlines('us', onGetRasponse)
}

// Function on get response from server (получить одну новость от сервера)
function onGetRasponse(error, response) {
    console.log(response.articles);
    renderNews(response.articles)
}

// function render news
function renderNews(news) {
    const newsContainer = document.querySelector('.news-container .row');
    console.log(newsContainer);
    let fragment = '';
    news.forEach(newsItem => {
        // console.log(newsItem);
        const el = newTemplate(newsItem);
        fragment += el
    })
    console.log(fragment);
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