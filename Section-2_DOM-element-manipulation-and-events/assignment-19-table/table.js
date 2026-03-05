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

  // расчитываем сумму balance
  const calculateBbalance = users.reduce(function (sum, user) {
    const { balance } = user
    return sum += balance
  }, 0);

  // UI Elements
  const tableContainer = document.querySelector('.table-container');
  console.log(tableContainer);

  // Events
  const cailBalance = createHTMLBalance(calculateBbalance)
  const tBody = createTbodyElement(objectOfUsers)
  const tHead = createTheadElement();
  renderTable();

  function renderTable() {
    const fragment = document.createDocumentFragment();
    const table = document.createElement('table');
    table.classList.add('table');

    table.appendChild(tHead);
    table.appendChild(tBody)

    fragment.appendChild(table);
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

    tBody.appendChild(cailBalance)

    return tBody
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
    tdBalance.textContent = balance;

    tr.appendChild(th);
    tr.appendChild(thName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdBalance)

    return tr;
  }

  function createHTMLBalance(balance) {
    const tr = document.createElement('tr');
    const th = document.createElement('th');

    const tdName = document.createElement('td');
    tdName.textContent = `Total ${balance}`;

    th.appendChild(tdName)
    tr.appendChild(th);
    return tr
  }


}(users))