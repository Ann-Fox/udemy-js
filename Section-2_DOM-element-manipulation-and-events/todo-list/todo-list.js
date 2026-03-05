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

    // console.log(objOfTasks);

    const themes = {
        default: {
            '--base-text-color': '#212529',
            '--header-bg': '#007bff',
            '--header-text-color': '#fff',
            '--default-btn-bg': '#007bff',
            '--default-btn-text-color': '#fff',
            '--default-btn-hover-bg': '#0069d9',
            '--default-btn-border-color': '#0069d9',
            '--danger-btn-bg': '#dc3545',
            '--danger-btn-text-color': '#fff',
            '--danger-btn-hover-bg': '#bd2130',
            '--danger-btn-border-color': '#dc3545',
            '--input-border-color': '#ced4da',
            '--input-bg-color': '#fff',
            '--input-text-color': '#495057',
            '--input-focus-bg-color': '#fff',
            '--input-focus-text-color': '#495057',
            '--input-focus-border-color': '#80bdff',
            '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
        },
        dark: {
            '--base-text-color': '#212529',
            '--header-bg': '#343a40',
            '--header-text-color': '#fff',
            '--default-btn-bg': '#58616b',
            '--default-btn-text-color': '#fff',
            '--default-btn-hover-bg': '#292d31',
            '--default-btn-border-color': '#343a40',
            '--default-btn-focus-box-shadow':
                '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
            '--danger-btn-bg': '#b52d3a',
            '--danger-btn-text-color': '#fff',
            '--danger-btn-hover-bg': '#88222c',
            '--danger-btn-border-color': '#88222c',
            '--input-border-color': '#ced4da',
            '--input-bg-color': '#fff',
            '--input-text-color': '#495057',
            '--input-focus-bg-color': '#fff',
            '--input-focus-text-color': '#495057',
            '--input-focus-border-color': '#78818a',
            '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
        },
        light: {
            '--base-text-color': '#212529',
            '--header-bg': '#fff',
            '--header-text-color': '#212529',
            '--default-btn-bg': '#fff',
            '--default-btn-text-color': '#212529',
            '--default-btn-hover-bg': '#e8e7e7',
            '--default-btn-border-color': '#343a40',
            '--default-btn-focus-box-shadow':
                '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
            '--danger-btn-bg': '#f1b5bb',
            '--danger-btn-text-color': '#212529',
            '--danger-btn-hover-bg': '#ef808a',
            '--danger-btn-border-color': '#e2818a',
            '--input-border-color': '#ced4da',
            '--input-bg-color': '#fff',
            '--input-text-color': '#495057',
            '--input-focus-bg-color': '#fff',
            '--input-focus-text-color': '#495057',
            '--input-focus-border-color': '#78818a',
            '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
        },
    };

    let lastSelectedTheme = localStorage.getItem('app_theme') || 'default';

    // Elements UI
    const listContainer = document.querySelector('.task-list-section .list-group');
    const form = document.forms['addTask'];
    const inputTitle = form.elements['title'];
    const inputBody = form.elements['body'];
    const themeSelect = document.querySelector('#themeSelect');

    // Events
    setTheme(lastSelectedTheme)
    renderOfTasks(objOfTasks);// вывести весь список задач на экран
    form.addEventListener('submit', onFormSubmitHendler);// повесить на форму событие submit
    listContainer.addEventListener('click', onDeleteHandler); // повесить событие на div list-group для удаления задачи
    listContainer.addEventListener('click', completedHahdler); // повесить событие на div list-group для отметки выполнения задачи
    themeSelect.addEventListener('change', onThemeSelectHanhdler)

    function renderOfTasks(tasksList) {
        if (!tasksList) {
            console.error('Нет ни одной задачи, необходимо заполнить список задач');
            return;
        }

        // создаем фрагмент для вывода li - задачи
        const fragment = document.createDocumentFragment();
        Object.values(tasksList).forEach(task => {
            const li = listItemTEmplate(task)
            fragment.appendChild(li)
        });

        listContainer.appendChild(fragment)
    }

    // используя деструктуризацию, передаем id, title, body для одного item
    function listItemTEmplate({ _id, title, body, completed } = {}) {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'aling-ittems-center', 'flex-wrap', 'mt-2');
        li.setAttribute('data-task-id', _id);

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
            completedBtn.classList.add('btn-warning');
            completedBtn.textContent = 'Отменить завершение задачи'
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

    // Изменение статуса завершения задачи
    function completedHahdler({ target }) {
        if (target.classList.contains('btn-success')) {
            console.log(target)
            const parent = target.closest('[data-task-id]');
            const id = parent.dataset.taskId;
            // const isCompleted = objOfTasks[id].completed;
            if (!objOfTasks[id].completed) {
                parent.classList.add('bg-success');
                target.classList.add('btn-warning');
                target.textContent = 'Отменить завершение задачи'
                objOfTasks[id].completed = true
                return objOfTasks[id].completed
            } else if (objOfTasks[id].completed) {
                parent.classList.remove('bg-success');
                target.classList.remove('btn-warning');
                target.textContent = 'Done'
                objOfTasks[id].completed = false;
                return objOfTasks[id].completed
            }
        }
    }

    // удаление задачи из объекта
    function deleteTask(id) {
        const { title } = objOfTasks[id]
        const isConfirm = confirm(`ВЫ уверены, что хотите удалить задачу ${title}?`);
        if (!isConfirm) return isConfirm;
        delete objOfTasks[id];
        return isConfirm;
    }
    // функция для удаления элемента из HTML разметки
    function deleteTaskFromHTML(el, isConfirm) {
        if (!isConfirm) return;
        el.remove()
    }
    // фуккция callback при клике на кнопку Delete task
    function onDeleteHandler({ target }) {
        if (target.classList.contains('delete-btn')) {
            const parent = target.closest('[data-task-id]');
            const id = parent.dataset.taskId;
            const isConfirm = deleteTask(id);
            deleteTaskFromHTML(parent, isConfirm)
        }
    }

    // обработчик события изменения Select - выпадающий список, получим значение нашего select
    function onThemeSelectHanhdler() {
        const selectTheme = themeSelect.value;
        const isComfirmed = confirm(`Вы действительно хотитк установить тему ${selectTheme}`);
        if (!isComfirmed) {
            selectTheme.value = lastSelectedTheme;
            console.log(selectTheme)
            return;
        }
        setTheme(selectTheme);
        lastSelectedTheme = selectTheme;
        localStorage.setItem('app_theme', selectTheme)
    }
    // функция, которая устанавливает тему
    function setTheme(nameTheme) {
        const selectedThemeObj = themes[nameTheme];
        console.log(selectedThemeObj);
        Object.entries(selectedThemeObj).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value)
        });
    }
})(tasks);
