// this - контекст вызова функции
// function getThis(){
//     console.log(this)
// }

// getThis();

// console.log(this);

// const dog = {
//     name: 'Sharik',
//     breed: 'beagle',
//     intro: function () {
//         console.log(this);
//     }
// };

// dog.intro();

const obj1 = {
    hello: function () {
        console.log('Hello world');
        return this;
    },
    obj2: {
        breed: 'dog',
        speak: function () {
            console.log('woof!');
            return this;
        }
    }
};

console.log(obj1);
console.log(obj1.hello());

console.log(obj1.obj2);
console.log(obj1.obj2.speak())

console.clear();

const objReg = {
    hello: function () {
        return this;
    }
};

const objArrow = {
    hello: () => this
};

// objReg.hello();
console.log(objReg.hello());

console.clear();

function test() {
    'use strict';

    console.log('hello word1');
    console.log(this);
}

test();

console.clear();

// const dog = {
//     breed: 'Beagle',
//     loveToChease: 'rabbits'
// };

// function chease(){
//     console.log(this.breed + ' loves cheasing ' + this.loveToChease + '/');
// }

// dog.foo = chease;
// dog.foo()

// console.log(dog)

console.clear();

function Dog(breed, name, friends) {
    this.breed = breed;
    this.name = name;
    this.friends = friends;
    this.intro = function () {
        console.log(`Hi, my name in ${this.name} and I'm a ${this.breed}`);
        return this;
    }
}

const chester = new Dog('beagle', 'Chester', ['Gracie', 'Josey', 'Barkley']);
chester.intro();
console.log(chester);

console.clear();

const City = function (city, state) {
    this.city = city || 'Phoenix';
    this.state = state || 'AZ';
    this.sentence = function () {
        console.log(`I live in ${this.city}, ${this.state}.`);
    };
}

const phoenix = new City();
console.log(phoenix)
phoenix.sentence();

const spokane = new City('Spokane', 'WA')
console.log(spokane);
spokane.sentence();

console.clear();

const Friend = function(name, password, interests,job){
    this.fullName = name;
    this.password = password;
    this.interests = interests;
    this.job = job;
};

function sayHello(){
    // console.log(this);
    return `Hi, my name is ${this.fullName} and I'm a ${this.job}. Let's be frinds!`
}

const john = new Friend('John Smith', 'badpassword', ['hiking','biking','skiing'], 'teacher');

console.log(john);
john.greeting = sayHello;

console.log(john.greeting())

// Помните о том, что sayHello() не стоит вызывать как обычную функцию
// console.log(sayHello())
