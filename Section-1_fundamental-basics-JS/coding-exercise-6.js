// Практическое задание по методам массивов.
// Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.

function doubleArray(arr) {
    let arrayDouble = arr.concat(arr);

    console.log(arrayDouble)
    return arrayDouble;
}

doubleArray([1, 2, 3]) // [1,2,3,1,2,3]