// 1. Есть класс Planet
function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет принимать, кроме name, название спутника (satelliteName). Переопределите метод getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку + дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’


function PlanetWithSatellite(name, satelliteName) {
    Planet.call(this, name);
    this.satelliteName = satelliteName;
    const parentGetName = this.getName.bind(this);

    this.getName = function () {
        return parentGetName() + '. The satellite is ' + this.satelliteName
    }
}

const earth = new PlanetWithSatellite('earth', 'moon');
earth.getName(); // 'Planet name is earth. The satellite is moon’


// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
function Building(name, floors) {
    this.name = name;
    this.floors = floors; //количество этажей

    this.getFloors = function () {
        return this.floors
    }

    this.setFloors = function (newFloors) {
        this.floors = newFloors
    }
}
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 

// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

// жилой дом
function ResidentialBuilding(name, floors, apartmentsFloor) {
    Building.call(this, name, floors);
    const parentGetFloors = this.getFloors.bind(this);
    this.apartmentsFloor = apartmentsFloor; //количество квартир на этаже

    this.getFloors = function () { //получить количество этажей
        return {
            floors: parentGetFloors(),
            totalAppartments: parentGetFloors() * this.apartmentsFloor
        }
    }
}

// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// торговый центр
function ShoppingCentre(name, floors, shopsFloor) {
    Building.call(this, name, floors);
    this.shopsFloor = shopsFloor; // количество магазинов на этаже

    this.getFloors = function () {
        return {
            floors: this.floors,
            totalShops: this.floors * this.shopsFloor
        }
    }
}

// От каждого класса создать экземпляр (дом, торговый центр)
const house = new ResidentialBuilding('black-house', 10, 3);
const imall = new ShoppingCentre('iMall', 3, 20);


// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). 
// Создайте наследника класса “Мебель” под названием “ОфиснаяМебель”. Придумайте ему несколько свойству, которые будут характерны только для этого класса. Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.getInfo = function () {
    return `name: ${this.name}, price: ${this.price}`
}

function OfficeFurniture(name, price, height, width) {
    Furniture.call(this, name, price);

    this.height = height;
    this.width = width;
}

OfficeFurniture.prototype = Object.create(Furniture.prototype)
OfficeFurniture.prototype.constructor = OfficeFurniture;

OfficeFurniture.prototype.getInfo = function () {
    const parentGetInfo = Furniture.prototype.getInfo.call(this);

    return `${parentGetInfo}, height: ${this.height}, width: ${this.width}`
}

const chair = new OfficeFurniture('chair', 1000, 1, 0.5);
// console.log(chair);

// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть true/false, должно быть скрытым). Свойства определяются в момент вызова конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)
const currentDate = new Date();
// console.log(currentDate);
const adminDate = currentDate.toLocaleDateString()
// console.log(adminDate);
const guestRegDate = new Date(2026, 1, 27);
// console.log(guestRegDate.toLocaleDateString());
const guestOneWeekDate = new Date(guestRegDate);
guestOneWeekDate.setDate(guestRegDate.getDate() + 7)
// console.log(guestOneWeekDate.toLocaleDateString());

function User(name, registrationDate) {
    this.name = name;
    this.registrationDate = registrationDate;
}

User.prototype.getInfo = function () {
    return `name: ${this.name}, registration data: ${this.registrationDate}`
}

function Admin(name, registrationDate, superAdmin) {
    User.call(this, name, registrationDate);
    let _superAdmin = superAdmin; // приватная переменная
    this.getInfo = function () {
        return `${User.prototype.getInfo.call(this)}, superAdmin: ${_superAdmin}`;
    }
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
// Admin.prototype.getInfo = function () {
//     const parentGetInfo = User.prototype.getInfo.call(this);
//     return `${parentGetInfo}, superAdmin: ${this.superAdmin}`
// }

function Guest(name, registrationDate, validDate) {
    User.call(this, name, registrationDate);
    this.validDate = validDate;
}

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;
Guest.prototype.getInfo = function () {
    const parentGetInfo = User.prototype.getInfo.call(this);
    return `${parentGetInfo}, one week after registration: ${this.validDate}`
}


const admin = new Admin('Ivan', adminDate, true);
const guest = new Guest('Ann', guestRegDate.toLocaleDateString(), guestOneWeekDate.toLocaleDateString())
// console.log(admin);
// console.log(guest);


// Прототип. Классы ES6
// 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }

// Пример вызова:

// const comp = new Component('span');

// class Component {
//     constructor(tagName = 'div') {
//         this.tagName = tagName;
//         this.node = document.createElement(tagName)
//     }
// }

// const comp = new Component('span');
// console.log(comp);

// 2. Реализовать конструктор и методы в ES6 синтаксисе:

// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }

// Component.prototype.setText = function (text) { 
//   this.node.textContent = text;
// };

class Component {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }

    setText(text) {
        this.node.textContent = text; //по условию метод ничего не возвращает, только присваивает значение
        // return this.node.textContent = text;
    }
}

const comp = new Component('span');
console.log(comp);


// 3. Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.

class Calculator {
    constructor(startNum) {
        this._startNum = startNum;
    }

    add(num) {
        return this.startNum += num;
    }

    subtract(num) {
        return this._startNum -= num;
    }

    multiply(num) {
        return this._startNum *= num;
    }

    divide(num) {
        if (num == 0) {
            console.log('На ноль делить нельзя, введите дркгое значение');
        } else
            return this._startNum /= num;
    }

    get startNum() {
        return this._startNum;
    }

    set startNum(value) {
        return this._startNum = value;
    }
}

const number = new Calculator(5);
console.log(number);
const add = number.add(6)
console.log(add);