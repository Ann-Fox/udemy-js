// 1. Найти в коде список ul и добавить класс “list”
const ul = document.querySelector('ul');
console.log(ul);
ul.classList.add('list')
// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// const link = document.querySelector('ul ~ a')
let link;
let nextElement = ul.nextElementSibling;

while (!link || !nextElement) {
    if (!nextElement) break;
    if (nextElement.tagName === 'A') {
        link = nextElement;
    }
    nextElement = nextElement.nextElementSibling
}

console.log(nextElement);
console.log(link)

// 3. На li через один (начиная с самого первого) установить класс “item”
let listLi = document.querySelectorAll('li')
listLi.forEach((li, index) => {
    if (index%2===0) {
        li.setAttribute('id', '“item”')
        console.log(li)
    }
});
console.log(listLi)

// 4. На все ссылки в примере установить класс “custom-link”
const allLinks = document.querySelectorAll('a');
allLinks.forEach(link => link.classList.add('custom-link'))
console.log(allLinks)