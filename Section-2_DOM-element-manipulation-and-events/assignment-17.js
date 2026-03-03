const button = document.querySelector('.menu__btn');
const dropdown = document.querySelector('#doka-menu');

button.addEventListener('click', function (e) {
  toggleDropdown(button, dropdown)
  console.log(button)
  console.log(dropdown)
});

function toggleDropdown(button, dropdown) {
  if (button.getAttribute('aria-expanded') === 'true') {
    button.setAttribute('aria-expended', 'false')
    dropdown.setAttribute('hidden', '')
  } else {
    button.setAttribute('aria-expanded', 'true')
    dropdown.removeAttribute('hidden')
  }
}