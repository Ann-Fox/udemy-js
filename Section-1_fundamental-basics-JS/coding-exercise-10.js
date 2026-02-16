// Практическое задание по функциям высшего порядка
// Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция). Если передан один из аргументов не удовлетворяет условию то функция должна вернуть new Error("с произвольным сообщением.")

// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь массив.

// Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.

function every(array, fn) {
    if (!Array.isArray(array) || typeof fn !== 'function' || !fn) {
        console.log('error');
        return new Error('Переданы неправильные аргументы');
    }


    for (let i = 0; i < array.length; i++) {
        if (!everyCallback(array[i], i, array)) {
            console.log(`every: false`)
            return false;
        }
       
    }
 console.log(`every true`)
        return true

}

function everyCallback(el) {
    console.log(typeof (el) === 'number')
    return typeof (el) === 'number';
}

// every([1, 3], everyCallback);
every([1, 3]);
every([6, 8, '7'], everyCallback)