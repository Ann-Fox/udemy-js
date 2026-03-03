const tasks = [
    {
        _id: '5d2ca9e2e03d40b326596aa7',
        completed: true,
        body:
            'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
        title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
        _id: '5d2ca9e29c8a94095c1288e0',
        completed: false,
        body:
            'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
        title:
            'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
    {
        _id: '5d2ca9e2e03d40b3232496aa7',
        completed: true,
        body:
            'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
        title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
        _id: '5d2ca9e29c8a94095564788e0',
        completed: false,
        body:
            'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
        title:
            'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
];

(function (arrOfTasks) {
    // console.log(arrOfTasks)
    // т.к. с массивом работать будет не удобно, из массива сделаем объект объектов
    const objOfTasks = arrOfTasks.reduce((acc, task) => {
        acc[task._id] = task;
        return acc;
    }, {});

    console.log(objOfTasks);

    // Elements UI
    const listContainer = document.querySelector('.task-list-section .list-group');
    const form = document.forms['addTask'];
    const inputTitle = form.elements['title'];
    const inputBody = form.elements['body'];

    // Events
    renderOfTasks(objOfTasks);// вывести весь список задач на экран

    form.addEventListener('submit', onFormSubmitHendler)// повесить на форму событие submit

    function renderOfTasks(tasksList) {
        if (!tasksList) {
            console.error('Нет ни одной задачи, необходимо заполнить список задач');
            return;
        }

        // создаем фрагмент для вывода li - задачи
        const fragment = document.createDocumentFragment();
        Object.values(tasksList).forEach(task => {
            const li = listItemTEmplate(task)
 
            li.addEventListener('click', (e) => {
                console.log(`start = ${task.completed}`)
                const t = e.target.classList.contains('btn-success')

                if (t) {
                    e.target.classList.toggle('btn-warning')
                    li.classList.toggle('bg-success')
                    task.completed = !task.completed
                    return task.completed
                }
            })
            fragment.appendChild(li)
        });

        listContainer.appendChild(fragment)
    }

    // используя деструктуризацию, передаем id, title, body для одного item
    function listItemTEmplate({ _id, title, body, completed } = {}) {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'aling-ittems-center', 'flex-wrap', 'mt-2');

        const span = document.createElement('span');
        span.textContent = title;
        span.style.fontWeight = 'bold';

        const article = document.createElement('p');
        article.textContent = body;
        article.classList.add('w-100', 'mt-2')

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete task';
        deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');

        const completedBtn = document.createElement('button');
        completedBtn.textContent = 'Done';
        completedBtn.classList.add('btn', 'btn-success', 'ms-2');

        if (completed) {
            li.classList.add('bg-success');
            completedBtn.classList.add('btn-warning')
        }

        li.appendChild(span);
        li.appendChild(article);
        li.appendChild(deleteBtn)
        li.appendChild(completedBtn)

        return li;
    }

    // обработчик события submit для формы
    function onFormSubmitHendler(e) {
        e.preventDefault(); //по умолчанию, при отправке формы страница перезагружается, убираем действия по умолчанию (перезаргузку страницы)
        const titleValue = inputTitle.value;
        const bodyValue = inputBody.value;

        if (!titleValue || !bodyValue) {
            alert('Пожалуйста, введите title и  body');
            return;
        }

        const task = createNewTask(titleValue, bodyValue);
        const listItem = listItemTEmplate(task); //используем функцию для создания шаблона li
        listContainer.insertAdjacentElement('afterbegin', listItem) //помещаем новую задачу в контейнер (dom element)
        form.reset()
    }

    function createNewTask(title, body) {
        const newTask = {
            title,
            body,
            completed: false,
            _id: `task-${Math.random()}`
        }

        objOfTasks[newTask._id] = newTask;

        console.log(objOfTasks);
        return { ...newTask };
    }

})(tasks);
