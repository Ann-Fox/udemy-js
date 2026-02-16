// Практическое задания на методы массивов.
// Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n:
function getArray(num) {
    let array = [];
    for (let i = 0; i < num; i++) {
        array[i] = i + 1;
    }
    console.log(array);
    return array;
}

getArray(10); // [1,2,3,4,5,6,7,8,9,10]