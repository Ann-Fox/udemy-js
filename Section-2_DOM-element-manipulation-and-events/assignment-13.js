// 1. Найти параграф и получить его текстовое содержимое (только текст!)

const paragraf = document.querySelector('p');
console.log(paragraf.textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function getInfoNode(node) {
    const info = {
        type: node.nodeType,
        name: node.nodeName,
        count: node.children.length
    }
    console.log(info);

    return {
        type: node.nodeType,
        name: node.nodeName,
        count: node.children.length

    }
}

getInfoNode(document.querySelector('ul'))
// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

const ul = document.querySelector('ul').children;
console.log(ul);

// const ulChild = [...ul]
// console.log(ulChild);

function getTextFromUl(ul) {
    // const ff = [...ul].map(item => item.textContent);
    return [...ul].map(item => item.textContent);
}

const f = getTextFromUl(ul)
console.log(f)

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:

// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
// pChildren = paragraf.childNodes;
// console.log(pChildren);

// const pChildrenArray = [...pChildren]
// console.log(pChildrenArray)
console.log(paragraf.childNodes)
paragraf.childNodes.forEach((item) => {
    if (item.nodeName === '#text') { //nodeType === 3
        item.textContent = '-text-'
    }
    console.log(item, item.nodeName, item.nodeType)
})
