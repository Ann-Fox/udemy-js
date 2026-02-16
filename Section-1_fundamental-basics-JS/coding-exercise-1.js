// Практическое задание по функциям.
// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение

// Пример вызова:

// multiply(1,2,3) => результат 6 (1*2*3);

// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

console.clear();

function multiply() {
    let element = 1;
    if (arguments.length) {
        for (let index = 0; index < arguments.length; index++) {
            element *= arguments[index];
        }
    } else {
        element = 0;
    }
    console.log(element);
    return element;
}

multiply(2, 4, 5, 6);
multiply();

// // function declaration
// function sayHello(firstName = 'Default', lastName = 'Default') {
//     // if(!firstName) return console.error('Error');
//     console.log(firstName, lastName)
//     console.log('Hello world');
//     return `Hello ${firstName} ${lastName}`;
// }

// // let res = sayHello('Anna', 'Chernysheva');
// // let res2 = sayHello('Anna', 'Chernysheva') + '!';
// // let res3 = sayHello(null);

// // console.log(res);
// // console.log(res2);
// // console.log(res3);

// // Область видимости функции - глобальная
// // let x = 10;

// // function foo(x) {
// //     x = 20;
// //     // let x=20; //локальная переменная
// //     console.log(x);
// // }

// // foo();

// // console.log(x)

// const user = {
//     name: 'Denis',
//     age: 30
// };

// function getObj(obj) {
//     obj.name = 'Den'
// }

// getObj(user)
// console.log(user)

// // function expression
// const square = function (x) {
//     return x * x;
// };

// // let resSquare = square(2);
// // let resSquare1 = square(4);
// // console.log(resSquare)
// // console.log(resSquare1)


//     (function (msg) {
//         console.log(msg);
//     })('Hello world');