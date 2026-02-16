// Questions for this assignment - Вопросы к этому заданию
// 1. Чему равно а, почему?
console.clear();

// let a = 0 || 'string'; //string

// let a = 1 && 'string'; //string

// let a = null || 25; //25

// let a = null && 25; //null

// let a = null || 0 || 35; //35

// let a = null && 0 && 35; //null

console.log(a)


// 2. Что отобразится в консоли. Почему?

// 12 + 14 + '12' //26 + '12' = 2612

// 3 + 2 - '1' //5 - 1 = 4

// '3' + 2 - 1 //32 - 1 = 32

// true + 2 //1 + 2 = 3

// +'10' + 1 // 10 + 1 = 11

// undefined + 2 //NaN

// null + 5 //0 + 5

// true + undefined //NaN



// 3. Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна 'hidden', присвоить ей значение 'visible', иначе - 'hidden'.

let isVisible = 'visible';

if (isVisible === 'hidden') {
    isVisible = 'visible';
} else {
    isVisible = 'hidden';
}

console.log(isVisible);

// 4. Создать переменную и присвойте ей число.
let num = 0;

// Используя if, записать условие:

if (num === 0) {// - если переменная равна нулю, присвоить ей 1;
    num = 1
} else if (num < 0) {// - если меньше нуля - строку 'less then zero';
    num = 'less then zero'
} else {// - если больше нуля - используя оператор 'присвоение', переменную умножить на 10 (использовать краткую запись).
    num *= 10;
}

console.log(num)



// 5. Дан объект 
let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };

// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true;
} else {
    car.needRepair = false;
}

console.log(car)

// 6. Дан объект 
let item = { name: 'Intel core i7', price: '200$', discount: '%' }

// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let price = parseFloat(item.price)
let discount = parseFloat(item.discount)

if (!isNaN(discount) && !isNaN(price)) {
    item.priceWithDiscount = price - (price * discount / 100)
    console.log(`priceWithDiscount ${item.priceWithDiscount}`)
} else {
    console.log(`price ${item.price}`)
}

// 7. Дан следующий код:

let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; // минимальная цена

let max = 20; // максимальная цена


// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

const priceProduct = parseFloat(product.price)

if (priceProduct >= min && priceProduct <= max) {
    console.log(product.name)
} else {
    console.log('Товаров не найдено')
}