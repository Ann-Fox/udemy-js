// Замыкание - функция, которая ссылается на свободные переменные
// Свободные переменные - переменные, которые не были переданы этой функции как параментры и не были объявлены внутри этой функции как локальные переменные

function getFullName(firstName, lastName) {
    // console.log(firstName, lastName);
    return function () {
        return `${firstName} ${lastName}`;
    };
}

const getName = getFullName('Denis', 'Mechcov');
// console.log(getName());

function updateValue(val = 0) {
    let x = val;
    console.log(`x = ${x}`)
    return function (num = 0) {
        console.log(`num = ${num}`)
        return (x += num);
    };
}

const updateVal = updateValue(1); //val
const updateVal2 = updateValue(5); //val

// console.log(updateVal(1)); //num = 1 return x += num (1 + 1) = 2
// console.log(updateVal(3));// num = 3 return x += num (2 + 3) = 5
// console.log(updateVal2(4));
// console.log(updateVal2(2));

function checkCred() {
    const login = 'test';
    const password = 'somePassword';

    return {
        checkLogin(value) {
            return login === value;
        },
        checkPassword(value) {
            return password === value;
        }
    }
}

const check = checkCred();
// console.log(check);
// console.log(check.checkLogin('fff'));
// console.log(check.checkPassword('ff'));

function closurExample() {
    const arrOfFunc = [];
    let value = '';
    for (let i = 0; i < 10; i++) {
        value += 1;
        arrOfFunc.push(function () {
            console.log(value, i)
        })
    }
    // console.log(arrOfFunc);
    return arrOfFunc;
}

const res = closurExample();
console.log(res)