const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
    "nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
    "nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
    "nestedField": { total: 200 }
  }
];

(function (arrayOfUsers) {
  // из массива объектов делаем объект с key - _id и value - user, для 
  const objectOfUsers = arrayOfUsers.reduce((acc, user) => {
    acc[user._id] = user;
    return acc;
  }, {})

  // функция для расчета суммы balance
  function calculateBalance() {
    return Object.values(objectOfUsers).reduce((sum, user) => {
      // console.log(user.balance)
      return sum + parseFloat(user.balance)
    }, 0);
  }

  // UI Elements
  const tableContainer = document.querySelector('.table-container');
  const form = document.forms['addUser'];
  const inputNameUser = form.elements['nameUser'];
  const inputEmailUser = form.elements['emailUser'];
  const inputBalanceUser = form.elements['balanceUser'];

  // Events
  // const cailBalance = createHTMLBalance(calculateBbalance)
  const tBody = createTbodyElement(objectOfUsers)
  const tHead = createTheadElement();
  let tFoot = createTfootElement(calculateBalance()) //создаем подвал с текущим балансом

  renderTable();
  form.addEventListener('submit', onFormSubmitHendler); // повесить на форму событие submit

  function renderTable() {
    const fragment = document.createDocumentFragment();
    const table = document.createElement('table');
    table.classList.add('table');
    table.classList.add('table-striped')

    table.appendChild(tHead);
    table.appendChild(tBody)
    table.appendChild(tFoot)

    fragment.appendChild(table);
    tableContainer.innerHTML = ''; //очищаем контейнер перед добавлением
    tableContainer.appendChild(fragment)
  }

  function createTheadElement() {
    const tHead = document.createElement('thead');
    const tr = document.createElement('tr');

    const titleThead = ['#', 'Name', 'Email', 'Balance'];

    titleThead.forEach(title => {
      const th = document.createElement('th');
      th.textContent = title;
      th.setAttribute('scope', 'col')
      tr.appendChild(th)
    })
    tHead.appendChild(tr)
    return tHead
  }

  function createTbodyElement(usersList) {
    const tBody = document.createElement('tbody');

    Object.values(usersList).forEach((user, index) => {
      const tr = trItemTemplate(user, index);
      
      tBody.appendChild(tr)
    
    })

    return tBody
  }

  function createTfootElement(balance) {
    const tFoot = document.createElement('tfoot');
    console.log(tFoot)
    const tr = createHTMLBalance(balance);
    console.log(tr)
    tFoot.appendChild(tr)
    return tFoot
  }

  // создание строки таблицы
  function trItemTemplate({ _id, name, email, balance } = {}, index) {
    const tr = document.createElement('tr');

    const th = document.createElement('th');
    th.textContent = index + 1;

    const thName = document.createElement('td');
    thName.textContent = name;

    const tdEmail = document.createElement('td');
    tdEmail.textContent = email;

    const tdBalance = document.createElement('td');
    tdBalance.textContent = balance.toFixed(2);

    tr.appendChild(th);
    tr.appendChild(thName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdBalance)

    return tr;
  }

  function createHTMLBalance(balance) {
    const tr = document.createElement('tr');

    const th = document.createElement('th');
    th.setAttribute('scope', 'row')

    const tdColspan = document.createElement('td');
    tdColspan.setAttribute('colspan', '2')

    const tdName = document.createElement('td');
    tdName.textContent = `Total: ${balance.toFixed(2)}`;
    // console.log(balance)
    tr.appendChild(th);
    tr.appendChild(tdColspan)
    tr.appendChild(tdName)
    return tr
  }

  // функция для добавления подвала с новой суммой
  function updateTotalBalance() {
    const newBalance = calculateBalance();
    const oldTFoot = document.querySelector('tfoot');
    const newTFoot = createTfootElement(newBalance);

    if (oldTFoot) {
      oldTFoot.replaceWith(newTFoot);
      tFoot = newTFoot; //обновляем ссылку
    }
  }

  // обработчик события submit для формы
  function onFormSubmitHendler(e) {
    e.preventDefault(); // убираем перезагрузку страницы при отправке формы (перезагрузка по умолчанию)

    const nameValue = inputNameUser.value.trim();
    const emailValue = inputEmailUser.value.trim();
    const balanceValue = inputBalanceUser.value.trim();

    // проверка на заполнение всех полей
    if (!nameValue || !emailValue || !balanceValue) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    // проверка, что баланс является числом
    if (isNaN(parseFloat(balanceValue))) {
      alert('Пожалуйста, введите корректное число для баланса');
      return;
    }

    const newUser = createNewUser(nameValue, emailValue, balanceValue);
    const newTr = trItemTemplate(newUser, Object.keys(objectOfUsers).length - 1);

    tBody.appendChild(newTr);

    // обновляем общую сумму в подвале таблицы
    updateTotalBalance();

    // очищаем поля формы
    inputNameUser.value = '';
    inputEmailUser.value = '';
    inputBalanceUser.value = '';
  }

  function createNewUser(name, email, balance) {
    const newUser = {
      name,
      email,
      balance: parseFloat(balance),
      _id: `user-${Math.random()}`
    }

    objectOfUsers[newUser._id] = newUser;

    return { ...newUser }
  }

}(users))