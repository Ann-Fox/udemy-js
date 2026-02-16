// 1. Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):


function sumDefault() {
    // console.log(arguments)
    const params = Array.prototype.slice.call(arguments);
    // console.log(params)
    if (!params.length) return 0;
    return params.reduce(function (prev, next) { return prev + next; });
}

const sum = (...params) => {
    // console.log(params)
    if (!params.length) {
        // console.log(0);
        return 0;
    }
    // console.log(params.reduce((prev, nex) => prev + nex))
    return params.reduce((prev, nex) => prev + nex)
}

sum(1, 2, 3, 4); // 10
sum(); // 0
sumDefault(1, 2, 3)

// что такое метод reduce можно прочитать https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// Переделать функцию с использованием функции-стрелки

function convertToObject(num) {
  const obj = {
      value: num,
      isOdd: Boolean(num % 2)
  }
  console.log(obj)
  return obj;
}

const convertToObjectTask = (num)=> ({
    value: num,
    isOdd: Boolean(num%2)
})

convertToObject(5);
console.log(convertToObjectTask(5));
console.log(convertToObjectTask(2));