// Практическое задание по функциям.
// Создать функцию, которая принимает строку и возвращает строку-перевертыш:
function reverseString(str) {

    let strString = String(str);
    let reversString = '';

    if (strString.length) {
        for (let i = 0; i < strString.length; i++) {
            reversString += strString[strString.length - 1 - i];
        }
        console.log(str)
        console.log(reversString)
    }
}
// Примеры вызовов и результаты

reverseString('test') // "tset"
reverseString('') // ''
reverseString(null) // llun
reverseString(undefined)// denifednu
reverseString()// denifednu
