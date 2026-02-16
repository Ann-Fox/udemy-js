// 1. Получить число pi из Math и округлить его до 2-х знаков после точки 
let piRound = Math.round(Math.PI * 100) / 100;
let piFixed = parseFloat((Math.PI).toFixed(2));

console.log(`piRound: ${piRound}, ${typeof (piRound)}`);
console.log(`piFixed: ${piFixed}, ${typeof (piFixed)}`);


// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
let numberMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let numberMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

let array = [15, 11, 16, 12, 51, 12, 13, 51];
let arrayMax = Math.max(...array);
let arrayMin = Math.min(...array);

console.log(`numberMax: ${numberMax}, ${typeof (numberMax)} and numberMin: ${numberMin}, ${typeof (numberMin)}`);
console.log(`arrayMax: ${arrayMax}, ${typeof (arrayMax)} and arrayMin: ${arrayMin}, ${typeof (arrayMin)}`);

// 3. Работа с Math.random:

// a. Получить случайное число и округлить его до двух цифр после запятой
// let randomNumber = Math.round(Math.random() * 100) / 100;
const randomNumber = Number(Math.random().toFixed(2))
console.log(randomNumber);

// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
let random0X = Math.floor(Math.random() * (100 - 20)) + 20;
const x = 20;
const randomX = Math.round(Math.random()*x);

console.log(`random0X: ${random0X}`);
console.log(`randomX: ${randomX}, ${typeof(randomX)}`)

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let summNumber = (0.6 * 10 + 0.7 * 10) / 10;
console.log(`summNumber: ${summNumber}`)

// 5. Получить число из строки ‘100$’
let numberFromString = parseInt('100$');
console.log(`numberFromString ${numberFromString}, ${typeof (numberFromString)}`) //number