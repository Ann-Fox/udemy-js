// Дана строка: 
let string = "some test string";

// ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ

// Questions for this assignment - Вопросы к этому заданию
// 1. Получить первую и последнюю буквы строки
const wordFirst = string.charAt(0);
const wordLast = string.charAt(string.length - 1);

const wordFirst1 = string.substring(0, 1);
const wordLast1 = string.substring(string.length - 1);

const wordFirst2 = string.slice(0, 1);
const wordLast2 = string.slice(string.length - 1);

console.log(`wordFirst: ${wordFirst}, wordLast: ${wordLast}`);
console.log(`wordFirst1: ${wordFirst1}, wordLast1: ${wordLast1}`);
console.log(`wordFirst2: ${wordFirst2}, wordLast2: ${wordLast2}`);

// 2. Сделать первую и последнюю буквы в верхнем регистре
const wordFirstUppercase = wordFirst.toLocaleUpperCase();
const wordLastUppercase = wordLast.toLocaleUpperCase();
const newString = `${wordFirstUppercase}${string.substring(1, string.length - 1)}${wordLastUppercase}`

console.log(newString);

// 3. Найти положение слова ‘string’ в строке
const indexString = string.indexOf('string');
const indexString2 = string.search('string');

console.log(indexString);
console.log(indexString2);

// 4. Найти положение второго пробела (“вручную” ничего не считать)
const secondWhitespace = string.indexOf(' ', string.indexOf(' ') + 1);
// console.log(secondWhitespace);

// 5. Получить строку с 5-го символа длиной 4 буквы
// let stringWithFiveIndex = string.substring(5, 4);
const substr = string.substr(5, 4);
console.log(substr);


// 6. Получить строку с 5-го по 9-й символы
const slice = string.slice(5, 10);
console.log(slice)

// 7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
const removeChar = string.slice(0, -6);
console.log(removeChar)

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
const a = 20;
const b = 16;

const stringYear = a.toString() + b;
const stringYear2 = String(a) + b;
console.log(stringYear, typeof(stringYear))
console.log(stringYear2, typeof(stringYear2))