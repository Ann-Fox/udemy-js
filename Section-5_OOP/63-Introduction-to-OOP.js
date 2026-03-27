// 63. Введение в ООП. Функции конструкторы. Классы ES5.
const str = new String('hello world')
// console.log(str);

// функция-конструктор
function Product(brand, price, discount) {
    // внутри функции Product создается пустой объект и он привязывается к ключевому слову this
    // 1. Создвется новый объект
    // 2. на этот объект устанавливается ссылка this
    // 3. возвращается этот объект
    this.brand = brand;
    this.price = price;
    this.discount = discount;
    // this.priseWithDiscount = function () {
    //     return (this.price*(100-this.discount))/100;
    // }
    // console.log(this);
}

// 64. Prototype ES5
Product.prototype.priseWithDiscount = function () {
    return (this.price * (100 - this.discount)) / 100;
}

Product.prototype.setPrice = function (newPrice) {
    this.price = newPrice;
}

let apple = new Product('Apple', 100, 20);
const samsung = new Product('Samsung', 200, 20);

// console.log(apple);
// console.log(samsung);

// Прототип - это свойства объектов, который содержит свойсва и методы своих родителей и родителе родителей
// объект содержащий свои свойства и методы

// 65. Наследование ES5
// Object.create - специальный метод, который позволяет создать новый объект с указанным объектом прототипа и свойствами
const protoForObject = {
    sayHello() {
        return 'Hello world';
    }
};

const obj = Object.create(protoForObject, {
    firstName: {
        value: 'Denis'
    }
});

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

User.prototype.sayUser = function () {
    return `Hello ${this.firstName} ${this.lastName}`
}

const user = new User('Ann', 'Chernysheva')

// Customer 
function Customer(firstName, lastName, membership) {
    // User.call(this, firstName, lastName);
    User.apply(this, arguments) //(функциональное наследование)

    this.membership = membership;
}

// Прототипное наследование
Customer.prototype = Object.create(User.prototype);
// Возвращаем конструктор Customer
Customer.prototype.constructor = Customer;
Customer.prototype.getMembership = function () {
    return this.membership.toUpperCase();
}

const customer = new Customer('Ivan', 'Ivanov', 'basic');

// 66. Классы ES6
const methodName = 'setNewPrice'
class ProductES {
    constructor(brand, price, discount) {
        this._brand = brand;
        this.price = price;
        this.discount = discount;
    }

    get brand() {
        return this._brand
    }

    set brand(name) {
        return this._brand = name;
    }

    priseWithDiscount() {
        return (this.price * (100 - this.discount)) / 100;
    }

    // setPrice(newPrice) {
    //     this.price = newPrice
    // }

    [methodName](newPrice) {
        this.price = newPrice
    }

    static plus(x, y) {
        return x + y;
    }
}

const newProduct = new ProductES('Samsung', 200, 10);

// Наследование ES6
class UserES {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class CustomerES extends UserES {
    constructor(firstName, lastName, membership) {
        super(firstName, lastName);
        this.membership = membership;
    }
    // метод сработает в первую очередь, даже если в родительском классе есть такой же (метод с таким же названием)
    getFullName() {
        // console.log('new get full name method');
        const parentRes = super.getFullName();
        return `${parentRes}, membership: ${this.membership}`
    }
}

const customerES = new CustomerES('Ivan', 'Ivanov', 'basic')
// console.log(customerES);