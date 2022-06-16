const formName = document.getElementById('user-name');
const formPhone = document.getElementById('user-phone');

// переменная формы в футере
let footer = document.getElementById('footer-form'),
  // переменная ящик успешного отзыва
  popup = document.getElementById('popup'),
  // кнопка сабмит
  popupToggle = document.getElementById('footer-submit-button');
function switchModule() {
  footer.classList.toggle('is-shown');
  popup.classList.toggle('is-hidden');
}

popupToggle.addEventListener('click', event => {
  event.preventDefault();
  formPhone.value = 'done';
  formName.value = 'done';
  formPhone.style.borderColor = 'green';
  formName.style.borderColor = 'green';
  switchModule();
  setTimeout(switchModule, 3000);
});
