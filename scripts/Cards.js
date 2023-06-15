import { zoomCardImage } from './index.js'

export class Card  {
  constructor(data, template) {
    this._data = data;
    this._cardElement = template.querySelector('.element').cloneNode(true);
    this._zoomCardImage = zoomCardImage;
  }

  EventListeners() {
    this._cardElement.querySelector('.element__like').addEventListener('mousedown',
      function () { thislassList.toggle('element__like_active') });
 
      this._cardElement.querySelector('.element__delete-btn').addEventListener('mousedown',
        () => this._cardElement.remove());

    this._cardElementPicture.addEventListener('click',
      () => this._zoomCardImage(this._data.name, this._data.link));
  }

  createCard = () => {
    this._cardElementPicture = this._cardElement.querySelector('.element__img');
    this._cardElement.querySelector('.element__title').textContent = this._data.name;
    this._cardElementPicture.src = this._data.link; 
    this._cardElementPicture.alt = this._data.name;
    this._setEventListeners();

    return this._cardElement
}

}