// 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
// func('a', 'b', 'c', 'd') →
// { first: 'a', other: ['b', 'c', 'd'] }
function getArgAndArray(...arg) {
    let obj = {
        first: arg.shift(),
        other: arg,
    };
    // console.log(obj);
    return obj;
}

const m = getArgAndArray('a', 'b', 'c', 'd', 'e')
console.log(m)

function firstAndOther(first, second, third, ...other) {
    // console.log(first, second, third, other)
    return {
        first, //first: 'd'
        second, //second: 2
        third, //third: 'f'
        other //other: ['f', 'g']
    }
}

const firstAndOtherArrow = (first, ...other) => ({first, other})

console.log(firstAndOther('d', 2, 'f', 'f', 'g'))
console.log(firstAndOtherArrow('d', 2, 'f', 'f', 'g'))

// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ..., info: { employees: [...], partners: [ … ] } }
// и выводит в консоль имя (если имени нет, показывать 'Unknown') и первые две компании из массива partners:

const organisation = {
    name: 'Google',
    info: {
        employees: ['Vlad', 'Olga'],
        partners: ['Microsoft', 'Facebook', 'Xing']
    }
};

// getInfo(organisation); →
// Name: Google
// Partners: Microsoft Facebook

function getInfo(obj) {
    let infoPartners = obj.info.partners.slice(0, 2).join(' ');
    console.log(`Name: ${obj.name || 'Unknown'}`);
    console.log(`Partners: ${infoPartners}`);
    console.log(obj)
}

getInfo(organisation);
// getInfo();

// const organisation = {
//   name: 'Google',
//   info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   }
// };

// function getInfo(
//   {
//     name = 'Unknow',
//     info: { partners: [first = 'none', second = 'none'] = [] } = {}
//   } = {}
// ) {
//   console.log(`Name: ${name}`);
//   console.log(`Partners: ${first}, ${second}`);
// }

// getInfo(organisation)
// getInfo()

// 3. Дан объект:
let user = {
    "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
    "isActive": false,
    "balance": "$2,474.46",
    "age": 30,
    "eyeColor": "blue",
    "name": "Tameka Maxwell",
    "gender": "female",
    "company": "ENOMEN",
    "email": "tamekamaxwell@enomen.com",
    "phone": "+1 (902) 557-3898",
    "tags": [
        "aliquip",
        "anim",
        "exercitation",
        "non",
    ],
    "friends": [
        {
            "id": 0,
            "name": "Barber Hicks"
        },
        {
            "id": 1,
            "name": "Santana Cruz"
        },
        {
            "id": 2,
            "name": "Leola Cabrera"
        }
    ],
};

// Используя деструктуризацию получить значения из следующих полей

// 1. name,  balance, email
const { name = '', balance = '', email = '' } = user;
console.log(name, balance, email)

// 2. из массива tags получить первый и последний элемент
const { tags = ''} = user
let {first} = tags
console.log(first)
// console.log(newTags.pop())
console.log(tags)

// 3. из массива friends получить значение поле name из первого элемента массива
const { friends } = user;
console.log(friends[0].name)
// Если какое то из полей не имеет значения то подставить значение по умолчанию.

// 4. С помощью оператора rest, из объекта user (из предыдущей задачи) скопировать в новый массив значение следующих полей tags и friends.

const [...newArrTags] = tags.concat(friends)
console.log(user)
console.log(newArrTags.shift())
console.log(newArrTags)
console.log(tags)