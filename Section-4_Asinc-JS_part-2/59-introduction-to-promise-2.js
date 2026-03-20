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

myHttp.get(
    `https://jsonplaceholder.typicode.com/posts`,
    (err, res) => {
        if (err) {
            console.log('error', err);
            return;
        }
        myHttp.get(
            `https://jsonplaceholder.typicode.com/comments?postsId=1`,
            (err, res) => {
                if (err) {
                    console.log('error', err);
                    return;
                }
                myHttp.get(
                    `https://jsonplaceholder.typicode.com/users/1`,
                    (err, res) => {
                        if (err) {
                            console.log('error', err);
                            return;
                        }
                        // console.log('наконец');
                    },
                );
            },
        );
    },
);

function getPost(id) {
    return new Promise((resolve, reject) => {
        myHttp.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            }
        )
    });
}

function getPostComments(post) {
    const { id } = post;
    console.log(id);
    return new Promise((resolve, reject) => {
        myHttp.get(
            `https://jsonplaceholder.typicode.com/comments?postId=${id}`, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve({ post, comments: res });
            }
        )
    });
}

function getUserCreatedPost(data) {
    const { post: { userId } } = data;
    console.log(userId);
    return new Promise((resolve, reject) => {
        myHttp.get(
            `https://jsonplaceholder.typicode.com/users/${userId}`, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve({ ...data, user: res });
            }
        )
    });
}

getPost(15)
    .then(post =>
        // console.log(post);
        // return getPostComments(post)
        getPostComments(post)
    )
    .then(data =>
        // console.log(data)
        // return getUserCreatedPost(data)
        getUserCreatedPost(data)
    )
    .then(fullDAta => console.log(fullDAta))
    .catch(err => console.log(err))
    .finally(() => console.log('finally'))


function getPost2(id) {
    return new Promise((resolve, reject) => {
        myHttp.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            }
        )
    });
}

function getPostComments2(id) {
    return new Promise((resolve, reject) => {
        myHttp.get(
            `https://jsonplaceholder.typicode.com/comments?postId=${id}`, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            }
        )
    });
}

function getUserCreatedPost2(userId) {
    return new Promise((resolve, reject) => {
        myHttp.get(
            `https://jsonplaceholder.typicode.com/users/${userId}`, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            }
        )
    });
}

Promise.all([
    getPost2(1),
    getPostComments2(1),
    getUserCreatedPost2(1)
]).then(
    // (fullData) => console.log(fullData)
    ([post, comments, user]) => console.log(post, comments, user)
).catch(err=>console.log(err))

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

delay(3000).then(() => {alert('выполнилось через 3 секунды');
    console.log('выполнилось через 3 секунды');
});