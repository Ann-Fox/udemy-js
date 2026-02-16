// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

// Questions for this assignment - Вопросы к этому заданию
// Создать объект с полем product, равным ‘iphone’

const products = {
    product: 'iphone'
};
console.log(products)
// Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
products.price = 1000;
products.current = 'dollar';

// Добавить поле details, которое будет содержать объект с полями model и color
products.details = {};
products.details.model = 'RX';
products.details.color = 'orange';