const promise = new Promise((resolve, reject) => {
    // setTimeout(() => resolve(Math.random()), 5000);
    setTimeout(() => reject('error'), 5000);
})

console.log(promise);
promise
    .then(x => {
        console.log(x);
        return x
    })
    .then(y => console.log(y))
    .catch(err => console.log(err))

// promise.then(z => console.log(z))

// HomeWork
// Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен. 

function promiseCreator(time, value) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, time);
    })
    return promise;
}

const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);
// Ok!
