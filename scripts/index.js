import { initialCards } from "./initialCards.js"
import { validationSettings } from './validate.js'
import { Card } from './Cards.js'
import { FormValidator } from './FormValidators.js'


const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileDesc = profile.querySelector('.profile__description');
const profileEditProfileButton = profile.querySelector('.profile__edit-button');
const profileAddImgButton = profile.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-btn');

const popupProfile = document.querySelector('#popup-profile');
const popupProfileForm = document.querySelector('#input-profile');
const popupProfileName = document.querySelector('#input-profile-name');
const popupProfileDesc = document.querySelector('#input-profile-description');

const popupCard = document.querySelector('#popup-card');
const popupCardForm = document.querySelector('#input-card');
const popupCardName = document.querySelector('#input-card-name');
const popupCardLink = document.querySelector('#input-card-link');

const popupZoomImage = document.querySelector('#popup-img');
const popupZoomImageImg = popupZoomImage.querySelector('.popup__image');
const popupZoomImageTitle = popupZoomImage.querySelector('.popup__image-title');

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openProfileEditor() {
  popupProfileName.value = profileName.textContent;
  popupProfileDesc.value = profileDesc.textContent;
  openPopup(popupProfile);
}

function saveProfileEditorChange(event) {
  event.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileDesc.textContent = popupProfileDesc.value;
  closePopup(popupProfile);
}

//закрытие попапа по клику на оверлей
const popUps = document.querySelectorAll('.popup');
popUps.forEach((popUp) => {
  popUp.addEventListener('click', (evt) => {
    if (evt.target === popUp) {
      closePopup(popUp);
    }
  });
});

//закрытие попапа по клику на Esc
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

const closePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}


// создание карт
initialCards.forEach(initialCard => elements.append(createCard(initialCard.name, initialCard.link))); 
function createCard(cardName, cardLink) { 
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true); 
  cardElement.querySelector('.element__title').textContent = cardName; 
  cardElement.querySelector('.element__img').src = cardLink; 
  cardElement.querySelector('.element__img').alt = cardName; 
  cardElement.querySelector('.element__like').addEventListener('click', 
    function () { this.classList.toggle('element__like_active') }); 
  cardElement.querySelector('.element__delete-btn').addEventListener('click', 
    () => cardElement.remove()); 
  cardElement.querySelector('.element__img').addEventListener('click', 
    () => zoomCardImage(cardName, cardLink)); 
  return cardElement 
}

function openCardEditor() {
  popupCardForm.reset();
  openPopup(popupCard);
}

function saveCardEditorChange(event) {
  event.preventDefault();
  const cardName = popupCardName.value;
  const cardLink = popupCardLink.value;
  elements.prepend(createCard(cardName, cardLink));
  closePopup(popupCard);
}

// просмотр картинки
export function zoomCardImage(name, link) {
  popupZoomImageTitle.textContent = name;
  popupZoomImageImg.src = link;
  popupZoomImageImg.alt = name;
  openPopup(popupZoomImage);
}

profileEditProfileButton.addEventListener('click', () => openProfileEditor());
popupProfileForm.addEventListener('submit', (event) => saveProfileEditorChange(event));
profileAddImgButton.addEventListener('click', () => openCardEditor());
popupCardForm.addEventListener('submit', (event) => saveCardEditorChange(event));

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


