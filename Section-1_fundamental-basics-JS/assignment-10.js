// 1. Создайте функцию которая бы умела делать:

minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0

function minus(val = 0) {
    let x = val;
    // console.log(`x=${x}`)
    return function (num = 0) {
        // console.log(`num=${num}`)
        console.log(`x - num = ${x - num}`)
        return (x - num);
    }
}

// Подсказка, функция minus должна возвращать другую функцию.

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

function multiplyMaker(val) {
    let value = val;
    return function (a) {
        // console.log(`this.val=${value}`)
        // console.log(`a=${a}`)
        // console.log(value*=a)
        return value *= a;
    }
}

const multiply = multiplyMaker(2);

multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)


// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш

// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

function fixString() {
    let str = ''
    return {
        setStr(val = '') {
            return str = String(val);
        },
        getStr() {
            return str;
        },
        getLenghtStr() {
            return str.length;
        },
        getStrReverse() {
            return str.split('').reverse().join('')
        }
    }
}

const str = fixString();
console.log(str.setStr('fqwert'))
console.log(str.getStr())
console.log(str.getLenghtStr());
console.log(str.getStrReverse())

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
console.clear()
function calc() {
    let num = 0;
    return {
        setValue(val = 0) {
            num = Number(val)
            console.log(num)
            return this;
        },
        getValue() {
            num = Math.round(num)
            console.log(num)
            return this;
        },
        summ(val) {
            num += val;
            console.log( num )
            console.log(this)
            return this
        },
        multiply(val){
            num *= val;
            console.log(num)
            return this;
        },
        difference(val){
            num -= val;
            console.log(num)
            return this;
        },
        divide(val){
            num /= val;
            console.log(num)
            return this;
        },
        exponentiate(val){
            num **= val;
            console.log(num)
            return this;
        }
    }
}

const module = calc();
// console.log(module.setValue(2).summ(2).multiply(2).difference(1).divide(2));
module.setValue(2).summ(2).multiply(2).difference(1).exponentiate(2).divide(5);
module.getValue()
// console.log(module.setValue(10));
// console.log(module.summ(5));
// console.log(module.getValue());
// console.log(module.multiply(2));
// console.log(module.exponentiate(2))
// console.log(module.divide(20))
// console.log(module.difference(15).divide(2))
