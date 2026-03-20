// function getPost(id) {
//   return Promise.resolve().then(() => {
//     const [userType, userId] = id.split('-');
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(response => response.json())
//   })
// }

// async function getPost(id) {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
//   // const data = await response.json();
//   // return data;

//   // return response.json()
//   return response
// }

async function getPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
    return response
  } catch (error) {
    // console.log(error);
    // throw error;
    return Promise.reject(error)
  }
}

getPost(1)
  .then(data => console.log(data))
  .catch(err => console.log(err))

// Несколько запросов
async function getPostAndUser(id) {
  try {
    const response1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());

    const response2 = await fetch(`https://jsonplaceholder.typicode.com/users`).then(res => res.json());
    return [response1, response2]
  } catch (error) {
    return Promise.reject(error)
  }
}

getPostAndUser(1)
  .then(data => console.log(data))
  .catch(err => console.log(err))

// если нужно получить данные из нескольких запросов/функций (альтернатива getPostAndUser)
async function getPostAll() {
  const [res1, res2] = await Promise.all([getPost(1), getPost(2)]);
  console.log(res1, res2);
}

getPostAll()