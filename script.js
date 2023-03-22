let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let openPopupButtons = document.querySelector('.open-popup');
let closePopup = document.querySelector('.modal__close');
let likeBtns = document.querySelectorAll('.elements__like');

openPopupButtons.addEventListener('click', () => {
  overlay.classList.add('active');
});

closePopup.addEventListener('click', () => {
  overlay.classList.remove('active');
});

document.addEventListener('click', (event) => {
  if(event.target === modal) {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }
});

likeBtns.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('elements__like_active')
  })
});