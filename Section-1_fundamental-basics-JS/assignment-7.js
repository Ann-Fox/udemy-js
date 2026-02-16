// Questions for this assignment - Вопросы к этому заданию

// 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {
    width: 10,
    height: 5,
    getSquare: function () {
        // console.log(this.width * this.height);
        return this.width * this.height;
    }
};

rectangle.getSquare();

// const Rectangle = function (width, height) {
//     this.width = width;
//     this.height = height;
//     this.getSquare = function () {
//         return this.width * this.height;
//     }
// }

// const figure1 = new Rectangle(8, 2);
// console.log(figure1.getSquare())
// console.log(figure1);

// 2. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:

const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        console.log(this.price)
        return this.price;
    },
    getPriceWithDiscount: function () {
        const discountFloat = parseFloat(this.discount);
        const priceWithDiscount = this.price - (this.price * discountFloat / 100)
        // console.log(discountFloat, typeof discountFloat)
        // console.log(priceWithDiscount)
        return priceWithDiscount
    }
};

price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5

// const PriceProduct = function (price, discount) {
//     this.price = price;
//     this.discount = discount;
//     this.getPrice = function () {
//         console.log(this.price)
//         return this.price;
//     };
//     this.getPriceWithDiscount = function () {
//         let priceWithDiscount = this.price - (this.price * this.discount / 100);
//         console.log(priceWithDiscount);
//         return priceWithDiscount;
//     }
// }

// const product1 = new PriceProduct(10, 15);
// console.log(product1);
// // console.log(product1.getPrice());
// // console.log(product1.getPriceWithDiscount());
// product1.getPrice();
// product1.getPriceWithDiscount();

// 3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:

const object = {
    height: 0,
    increaseHeightByOne: function () {
        console.log(this.height += 1)
        this.height += 1;
        return this.height;
    }
}

object.height = 10;
object.increaseHeightByOne(); // придумать свое название для метода
object.height; // 11;

// const Object = function (height) {
//     this.height = height;
//     this.countHeight = function () {
//         return this.height++;
//     }
// }

// const object1 = new Object(5);
// console.log(object1);
// object1.countHeight()
// console.log(object1)
// object1.countHeight()

// console.log(object1)

// 4. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”.

// Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        console.log(this)
        return this;
    },
    plusOne: function () {
        this.value += 1;
        return this;
    },
    minusOne: function () {
        this.value -= 1;
        return this
    },
}

numerator.double().plusOne().minusOne();
numerator.value // 2

console.log(numerator.value)


// 4. Создать объект с розничной ценой и количеством продуктов.
// Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

const productObject = {
    retailPrice: 10,
    numberOfProducts: 20,
    getTotalPrice: function () {
        console.log(this.retailPrice * this.numberOfProducts);
        return this.retailPrice * this.numberOfProducts;
    }
}

let a = productObject.getTotalPrice();
console.log(a)

// 6. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.

// Для этого “позаимствуйте” метод из предыдущего объекта.

const productObject2 = {
    retailPrice: 20,
    numberOfProducts: 25,
}

productObject.getTotalPrice.call(productObject2);

// 7. Даны объект и функция:

let sizes = { width: 5, height: 10 },

    getSquare = function () { return this.width * this.height };

// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

let sizesGetSquare = getSquare.call(sizes);
console.log(sizesGetSquare)

// 8. 
let element = {
    height: 25,
    getHeight: function () { return this.height; }
};


let getElementHeight = element.getHeight.bind(element);
getElementHeight(); // undefined

console.log(getElementHeight())

// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.