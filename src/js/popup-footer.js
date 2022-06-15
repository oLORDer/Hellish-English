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
  switchModule();
  setTimeout(switchModule,3000);
  // setInterval(5000);
});



// popupToggle.addEventListener('click', event => {
//     event.preventDefault();
//     footer.classList.toggle('is-shown');
//     popup.classList.toggle('is-hidden');
//     setTimeout(1000);
//     // setInterval(5000);
//   });