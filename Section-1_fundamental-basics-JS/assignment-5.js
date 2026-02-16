// Questions for this assignment - Вопросы к этому заданию
console.clear();
// 1. Записать в виде switch case следующее условие:
let a = ''

if (a === 'block') {

    console.log('block')

} else if (a === 'none') {

    console.log('none')

} else if (a === 'inline') {

    console.log('inline')

} else {

    console.log('other')

}

switch (a) {
    case 'block':
    case 'none':
    case 'inline':
        console.log(a);
        break;
    default: console.log('other')
}


// 2. Записать данное условие в виде тернарного оператора

let b = 'hidden';

// if (b === 'hidden') {

//   b = 'visible';

// } else {

//   b = 'hidden';

// }

b = (b === 'hidden') ? 'visible' : 'hidden';

console.log(b)

// 3. Записать данное условие в виде тернарного оператора

let c = 100;

// if (c === 0) {

//   c = 1;

// } else if (c < 0) {

//   c = 'less then zero';

// } else {

//   c *= 10;

// }

c = (c === 0) ? 1 : (c < 0) ? (c = 'less then zero') : (c *= 10)

console.log(c)
