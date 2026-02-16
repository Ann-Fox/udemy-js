// Практическое задание по функциям
// Создать функцию, которая в качестве аргумента может принять строку, числа, null или undefined и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
function getCodeStringFromText(str) {
    const strString = String(str);
    let strUnicode = '';

    if (strString.length) {
        for (let i = 0; i < strString.length; i++) {
            let element = strString[i].charCodeAt();
            console.log(element);
            strUnicode += element + ' ';
        }
    } else {
        strUnicode = '';
    }

    console.log(strString)
    console.log(strUnicode.trim())

    return strUnicode.trim();
}

getCodeStringFromText("hello") // “104 101 108 108 111”

// подсказка: в решении задачи вам помогут методы charCodeAt и trim