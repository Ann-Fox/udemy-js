// 1. По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
const btnMsg = document.querySelector('#btn-msg')
btnMsg.addEventListener('click', function (e) {
    alert(btnMsg.getAttribute('data-text'));
    console.log(btnMsg.getAttribute('data-text'));
});

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

// btnMsg.classList.add('btn-msg');
// console.log(btnMsg);

btnMsg.addEventListener('mouseenter', function (e) {
    btnMsg.classList.add('btn-msg-red')
});

btnMsg.addEventListener('mouseleave', function (e) {
    btnMsg.classList.remove('btn-msg-red')
});


// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
const tag = document.querySelector('#tag');

document.addEventListener('click', function (event) {
    console.log(event.target.tagName.toLowerCase());
    // tag.insertAdjacentHTML('afterend', event.target.tagName.toLowerCase());
    tag.textContent = `Tag: ${event.target.nodeName}`;

});

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
const btnGenerate = document.querySelector('#btn-generate');
const ul = document.querySelector('ul');
console.log(ul)
btnGenerate.addEventListener('click', function (event) {
    console.log(event.target)
    const ulCount = ul.children.length + 1
    console.log(ulCount)

    let li = document.createElement('li');
    li.textContent = `Item ${ulCount}`;

    ul.appendChild(li)
})


// Задачи из учебника JS
const ulListCake = document.querySelector('.ul-list-cake');
const btnParagraf = document.querySelector('.btn-paragraf')

btnParagraf.addEventListener('click', function (event) {
    btnParagraf.classList.toggle('open');
    ulListCake.classList.toggle('open');
})


let paneDiv = document.querySelectorAll('.pane');

for (let item of paneDiv) {
    item.insertAdjacentHTML('afterbegin', '  <button class="remove-button">[x]</button>');
    console.log(item)
    console.log(item.firstChild)

    item.firstElementChild.addEventListener('click', function (event) {
        console.log(event)
        item.remove()
    });
    // кнопка становится первым потомком плитки (pane)
    // let a = item.firstChild;
    // console.log(a)
    // item.firstElementChild.onclick = () => {
    //     // console.log(item.children)
    //     // console.log(item.firstElementChild)
    //     item.remove()
};
// }


