// 1. Зная структуру html, с помощью изученных методов получить (в консоль):
// 1. head
console.log(document.head);
// 2. body
console.log(document.body);
// 3. все дочерние элементы body и вывести их в консоль.
console.log(document.body.children);
// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.children);
// б) вывести в консоль все дочерние узлы, кроме первого и последнего
const firstDiv = document.body.firstElementChild;
console.log(firstDiv)
const filterArticles = [...firstDiv.children].filter(p => p !== firstDiv.firstElementChild && p !== firstDiv.lastElementChild);
console.log(filterArticles)
// Для навигации по DOM использовать методы, которые возвращают только элементы

console.clear()
// 2. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
function isParent(parent, child) {
    if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) return;

    let isParent = false;
    let currentParent = child.parentElement;

    while (currentParent) {
        isParent = currentParent === parent
        if (isParent) {
            break;
        }

        currentParent = currentParent.parentElement;
    }

    console.log(parent);
    console.log(currentParent)

    return isParent;
}

// isParent(parent, child);
isParent(document.body.children[0], document.querySelector('mark'));

// true так как первый див является родительским элементом для mark

isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark

// Функция принимает только DOM объекты. Обязательно проверяйте это.

// 3. Используя разметку из предыдущего задания.
// Получить список всех ссылок, которые не находятся внутри списка ul.
links = document.links

console.log(links)

const linlsNotInUl = [...links].filter((link) => {
    return !link.closest('ul')
});

console.log(linlsNotInUl);
console.log(linlsNotInUl[0])
console.log(linlsNotInUl[1])

// 4. Найти элемент, который находится перед и после списка ul.
const ul = document.querySelector('ul');
const prev = ul.previousElementSibling;
const next = ul.nextElementSibling;

console.log(prev)
console.log(next)