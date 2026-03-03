// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:

// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>

// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
let ul = document.querySelector('ul');
listLi = [...ul.children]
const arrayLength = 5
const fragment = document.createDocumentFragment();

for (let i = listLi.length; i <= arrayLength; i++) {
    const item = document.createElement('li');
    item.classList.add('new-item');
    item.textContent = `item ${i + 1}`;
    fragment.appendChild(item)
    console.log(item)
}

ul.appendChild(fragment)

console.log(ul)
console.log(listLi)
console.log(fragment)

// 2. В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).
const links = ul.querySelectorAll('a');
links.forEach((item, index) => {
    const strong = document.createElement('strong')
    strong.textContent = ` strong${index+1}`
    item.appendChild(strong)
    console.log(item)
})

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

const imgCats = document.createElement('img');
// imgCats.setAttribute('src', 'cats.jpg');
imgCats.src = 'https://i.pinimg.com/736x/8c/0e/e9/8c0ee95d55bd16cf6f3eee91171c700a.jpg'
// imgCats.setAttribute('alr','Cats');
imgCats.alt = 'Cats';
imgCats.title = imgCats.alt;
imgCats.style = 'width: 200px; height: auto'


document.body.insertAdjacentElement('afterbegin', imgCats)
// document.body.appendChild(imgCats)

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
const mark = document.querySelector('mark');
mark.insertAdjacentHTML('beforeend', 'green');
mark.classList.add('green');
console.log(mark);

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
const li = document.querySelectorAll('li');
console.log(li)
console.log(ul)
let arrLiReverse = [...li].reverse();
console.log(arrLiReverse);

arrLiReverse.forEach((item)=>{
    ul.appendChild(item)
})