// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => { return response.json() })
//     .then(posts => console.log(posts))
//     .catch(err => console.log(err))

function getPost(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(post => resolve(post))
            .catch(err => reject(err))
    })
}

// getPost(2).then(post=>console.log(post));

function getPost2(id) {
    const [userType, userId] = id.split('-')
    // console.log(id.split('-'));
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(response => response.json())
}

// getPost2('user-1')
//     .then(post => console.log(post))
//     .catch(err => console.log(err))

function getPost3(id) {
    return Promise.resolve().then(() => {
        const [userType, userId] = id.split('-');
        return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(response => response.json())
    })
}
//если передадим число или какой-то другой не подходящий формат агрумента, то сработает catch, приложение не сломается, просто выдаст ошибку, с которой можно будет работать
// getPost3('user-1')
//     .then(post => console.log(post))
//     .catch(err => console.log(err))

  async function getUsers(names) {
    let jobs = [];
  
    for(let name of names) {
      let job = fetch(`https://api.github.com/users/${name}`).then(
        successResponse => {
          if (successResponse.status != 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
        failResponse => {
          return null;
        }
      );
      jobs.push(job);
    }
  
    let results = await Promise.all(jobs);
  
    return results;
  }

// async function getUsers(names) {
//     let jobs = [];
//     for (let name of names) {
//         let job = fetch(`https://api.github.com/users/${name}`).then(
//             res => {
//                 if (res.status !== 200) {
//                     return null;
//                 } else {
//                     return res.json()
//                 }
//             },
//             err => {
//                 return null;
//             }
//         );
//         jobs.push(job)
//     }
//     let result = await Promise.all(jobs);
//     return result;

// }

let a = getUsers(['iliakan', 'remy', 'no.such.users'])
console.log(a);