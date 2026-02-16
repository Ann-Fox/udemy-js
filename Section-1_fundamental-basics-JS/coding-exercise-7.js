// Практическое задания по методам массивов.
// Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.

function changeCollection() {
    let res = [];
    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            let element = arguments[i].slice();
            element.shift()
            res.push(element)
        }
    }
    return res
}

console.log(changeCollection([1, 2, 3], ['a', 'b', 'c'], '4'))
// console.log(changeCollection([1, 2, 3], ['a', 'b', 'c']))

// changeCollection([1,2,3], [‘a’, ’b’, ‘c’])  // [ [2,3], [‘b’, ‘c’] ]


// Не забудьте про проверкку того что массив является массивом. Это можно сделать с помощью метода Array.isArray(arr);