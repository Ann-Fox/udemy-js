const div = document.querySelector('div')
const titles = document.querySelectorAll('h1')
const link = div.querySelector('.link')

console.log(div.parentElement);
console.log(titles[1].textContent);
console.log(link.closest('.content'));

div.classList.add('acticle', 'custom');
div.classList.remove('acticle');
div.classList.contains('custom');
div.classList.toggle('toggle');
div.setAttribute('id', 'myId'); // присвоить атрибт со значением
div.id = 'id2'
console.log(div.hasAttribute('id')) //проверяет наличие атрибута

console.log(div.classList)
console.log(div.className);
console.log(div.getAttribute('id')) //получить значение атрибута

// div.removeAttribute('id') //удаление атрибута
// console.log(div.hasAttribute('id'))

console.log(div.dataset);
console.log(div.dataset.myattr, typeof div.dataset.myattr)
div.dataset.myattr = 'new my attr';
console.log(div.getAttribute('data-myattr'))

// console.log(link.href);
// console.dir(link)

// const mainContainer = document.querySelector('.main-container');
// console.log(mainContainer);

// mainContainer.addEventListener('click', function (e) {
//     const targetElement = e.target;
//     console.log(targetElement);

//     const buttonElement = targetElement.closest('.button');
//     console.log(buttonElement);

//     if (buttonElement === null) {
//         console.log('not button');
//         e.stopPropagation();
//         return;
//     }

//     const containerElement = buttonElement.closest('.container');
//     console.log(containerElement)
// })

console.clear();
// 37. Манипуляция DOM элементами

const title = document.querySelector('h1');
// title.innerHTML = '<span>text</span>';
// title.textContent = 'new text';
// title.appendChild('<span>append</span>')
// title.insertAdjacentHTML('afterbegin', '<h2>title h2 </h2>');
// title.insertAdjacentElement('beforeend', link)
// console.log(title);

// title.innerHTML += '<span>span text</span>';
// const span = title.querySelector('span');
// // title.innerHTML += '<span>span2</span>';
// span.innerHTML = 'other span'
// console.log(span);

// Создание элемента
const span = document.createElement('span');
span.textContent = 'span by createElement';
span.classList.add('fff');
title.appendChild(span)
console.log(span)

// Создание множества элементов
const fragment = document.createDocumentFragment();
const colors = ['green', 'yellow', 'orange'];

colors.forEach((color) => {
    const item = document.createElement('div');
    item.classList.add(`bg-${color}`);
    item.style.background = color;
    item.textContent = color;
    fragment.appendChild(item)
    console.log(item)
});

document.body.appendChild(fragment)

// Удаление элементов
span.remove()