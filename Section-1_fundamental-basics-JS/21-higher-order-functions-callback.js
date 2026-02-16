// function foo() {
//     console.log('Hello world');
// }

// foo();

// foo.field = 'Denis';

// console.log(foo.field);

// Функции высшего порядка - это функции, которые принимают в качестве аргументов другие функции или возвращает функции (addEventListener)

// Метод Map возвращает новый массив, состоящий из результатов вызова функции Callback, которая была передана в качестве параметра

const arr = ['Denis', 'Ivan', 'Maks', 'Olga'];

//получить[5,4,4,4]
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i].length;
    console.log(element);
    newArr.push(element);
}
console.log(newArr);

// получить ['DENIS', 'IVAN','MAKS','OLGA']
let newArr2 = [];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    newArr2.push(element.toUpperCase());
}
console.log(newArr2);

console.clear();

// Переписать на функцию высшего порядка
const names = ['Denis', 'Ivan', 'Maks', 'Olga'];

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        res.push(fn(element))
    }
    console.log(res)
    return res;
}

function nameLength(el) {
    // console.log(el)
    // console.log(el.length)
    return el.length;
}

function nameToUpperCase(el) {
    // console.log(el)
    // console.log(el.toUpperCase())
    return el.toUpperCase();
}

mapArray(names, nameLength);
mapArray(names, nameToUpperCase);

// Функции возвращают другие функции
function processString(string, handler) {
    let newString = '';

    for (let i = 0; i < string.length; i++) {
        newString += handler(string[i]);
    }
    console.log(newString)
    return newString;
}

processString('Hello, easycode!',
    function (symbol) {
        return symbol.toUpperCase();
    });
processString('Hello, easycode!',
    function (symbol) {
        return symbol + '_';
    });
processString('Hello, easycode!',
    function (symbol) {
        return (' ' + symbol.charCodeAt() + ' _ ').trim();
    });
