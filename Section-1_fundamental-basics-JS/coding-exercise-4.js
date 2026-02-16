// Практическое задания по функциям
// Создать функцию угадай число.

// Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).

// Если число не соответствует условию то верните ошибку return new Error("Please provide number in range 0 - 10").

// Если переданно не число то верните ошибку return new Error("Please provide a valid number");

// Далле функция генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает строку “You win!”

// если нет то строку “You are lose, your number is 8, the random number is 5”.  Числа в строке указаны как пример вы подставляете реальные числа.

// Если переданно число в виде строки оно должно быть преобразованно к числу.

function guessTheNumber(num) {
    let numRandom = Math.floor(Math.random() * (11 - 1)) + 1;
    console.log(numRandom)

    if (typeof (num) === 'number' || !isNaN(num)) {
        if (num > 0 && num <= 10) {
            console.log(typeof (num))
            console.log(num)
            if (num === numRandom) {
                console.log('You win!')
                return 'You win!';
            } else {
                console.log(`You are lose, your number is ${num}, the random number is ${numRandom}`);
                return `You are lose, your number is ${num}, the random number is ${numRandom}`;
            }
        } else {
            console.log(typeof (num))
            console.log(num)
            console.error('Please provide number in range 0 - 10')
            return new Error('Please provide number in range 0 - 10');
        }
    } else {
        console.log(typeof (num))
        console.log(num)
        console.error('Please provide a valid number')
        return new Error('Please provide a valid number');
    }
}

guessTheNumber(5);
guessTheNumber(55);
guessTheNumber('55');
guessTheNumber(null);
guessTheNumber(undefined);

