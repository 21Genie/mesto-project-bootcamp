const overlayEdit = document.querySelector('.popup-edit');
const overlayAdd = document.querySelector('.popup-add');

const openPopupEdit = document.querySelector('.profile__button_type_edit');
const openPopupAdd = document.querySelector('.profile__button_type_add');

const closePopupEdit = document.querySelector('.popup-edit__close');
const closePopupAdd = document.querySelector('.popup-add__close');

const closeSaveEdit = document.querySelector('.popup-edit__save');
const closeSaveAdd = document.querySelector('.popup-add__save');

//Открытие и закрытие Popup
openPopupEdit.addEventListener('click', () => {
  overlayEdit.classList.add('active');
});

closePopupEdit.addEventListener('click', () => {
  overlayEdit.classList.remove('active');
});

document.addEventListener('click', (event) => {
  if (event.target === overlayEdit) {
    overlayEdit.classList.remove('active');
  }
});

openPopupAdd.addEventListener('click', () => {
  overlayAdd.classList.add('active');
});

closePopupAdd.addEventListener('click', () => {
  overlayAdd.classList.remove('active');
});

document.addEventListener('click', (event) => {
  if (event.target === overlayAdd) {
    overlayAdd.classList.remove('active');
  }
});

//Добавление Имени пользователя и его описание
const formElementEdit = document.querySelector('.popup-edit__form');
const nameInputEdit = document.querySelector('.profile__name');
const jobInputEdit = document.querySelector('.profile__description');

function handleFormSubmitEdit(evt) {
  evt.preventDefault();

  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;

  nameInputEdit.textContent = name;
  jobInputEdit.textContent = description;

  closeSaveEdit.addEventListener('click', () => {
    overlayEdit.classList.remove('active');
  });
}

formElementEdit.addEventListener('submit', handleFormSubmitEdit);

//Добавление каритнок и лайков
const formAddEl = document.querySelector('.popup-add__form');
const nameAddInputEl = formAddEl.querySelector('.popup-add__name-card');
const jobAddInputEl = formAddEl.querySelector('.popup-add__url');

const addListenerToLike = (element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('elements__like_active')
  })
}
let likeBtns = document.querySelectorAll('.elements__like');
likeBtns.forEach(addListenerToLike);

function handleFormSubmitAdd(evt) {
  evt.preventDefault();

  const nameCardValue = document.getElementById('nameCard').value;
  const urlCardValue = document.getElementById('url').value;

  nameAddInputEl.textContent = nameCardValue;
  jobAddInputEl.textContent = urlCardValue;

  const cardTemplate = document.querySelector('#card').content;
  const elementList = document.querySelector('.elements__list');

  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);

  cardElement.querySelector('.elements__image').src = urlCardValue;
  cardElement.querySelector('.elements__title').textContent = nameCardValue;

  const cardElementBtn = cardElement.querySelector('.elements__like');
  addListenerToLike(cardElementBtn)

  const basketBtn = cardElement.querySelector('.elements__basket');
  addListenerToBasket(basketBtn)

  const zoomEl = cardElement.querySelector('.elements__image');
  zoomImage(zoomEl)

  elementList.prepend(cardElement);

  closeSaveAdd.addEventListener('click', () => {
    overlayAdd.classList.remove('active');
  });
}

formAddEl.addEventListener('submit', handleFormSubmitAdd);

//Удаление картинок
const addListenerToBasket = (element) => {
  element.addEventListener('click', (evt) => {
    const target = evt.target;
    target.parentNode.remove('elements__item');
  })
}

const ButtonBaskets = document.querySelectorAll('.elements__basket');
ButtonBaskets.forEach(addListenerToBasket);


//Открытие картинок
const popupEl = document.querySelector('.popup-card');
const figureEl = popupEl.querySelector('.popup-card__figcaption');
const imageEl = popupEl.querySelector('.popup-card__image');
const closeButton = popupEl.querySelector('.popup-card__close');

const zoomImage = (element) => {
  element.addEventListener('click', () => {
    popupEl.classList.add('active');
    imageEl.src = element.src;
    titleItem = element.closest('.elements__item');
    figureEl.textContent = titleItem.textContent;
  });
}

closeButton.addEventListener('click', () => {
  popupEl.classList.remove('active');
});

document.addEventListener('click', (event) => {
  if (event.target === popupEl) {
    popupEl.classList.remove('active');
  }
});

const elementsImages = document.querySelectorAll('.elements__image');
elementsImages.forEach(zoomImage);