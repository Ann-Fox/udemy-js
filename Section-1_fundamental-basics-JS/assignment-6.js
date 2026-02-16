console.clear()

// В этих задачах старайтесь не использовать методы массивов. Используйте циклы и условия.

// Вопросы для этого задания

// 1. На основе строки “i am in the easycode” создайте новую строку, в которой первые буквы каждого слова будут заглавными. Используйте for или while.

const string = 'i am in the easycode';
let res = '';

for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === ' ') {
        res += string[i].toUpperCase();
    } else {
        res += string[i];
    }
}
console.log(res);

// 2. Дана строка “tseb eht ma i”. С помощью циклов переверните строку (то есть последняя буква становится первой, предпоследняя — второй и т. д.).

const stringReverse = 'tseb eht ma i';
let resString = '';

for (let i = 0; i < stringReverse.length; i++) {

    resString += stringReverse[stringReverse.length - 1 - i];

}
console.log(resString);

// 3. Факториал числа — произведение всех натуральных чисел от 1 до n

// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

const facttorial = 10;
let resFactorial = 1;

for (let i = 1; i <= facttorial; i++) {
    resFactorial *= i;
}

console.log(resFactorial);

// На основе строки “JavaScript is a pretty good language” создать новую строку,
const stringJS = 'JavaScript is a pretty good language';
let newStringJS = '';
// где каждое слово начинается с заглавной буквы, а пробелы удалены. Использовать for.
for (let i = 0; i < stringJS.length; i++) {
    if (i === 0 || (stringJS[i - 1]) === ' ') {
        newStringJS += stringJS[i].toUpperCase();
    } else if (stringJS[i] !== ' ') {
        newStringJS += stringJS[i];
    }
}

console.log(newStringJS);

// Найти все нечётные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (const element of array) {
    if (element % 2) {
        console.log(element);
    }
}


// Дан объект:

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

// Перебрать объект и, если значение свойства является строкой, переписать его целиком в верхнем регистре. Использовать for in.

for (const key in list) {
    let element = list[key];

    if (typeof (element) == 'string') {
        element = element.toUpperCase()
    }
    console.log(element)
}
