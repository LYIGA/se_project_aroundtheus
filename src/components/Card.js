export default class Card {
  constructor({ name, link }, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _setEventListener() {
    // .card__like-button
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    //.card__delete-button
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeletCard();
      });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _handleDeletCard() {
    this._element.remove();
  }

  _handleLikeIcon() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  getView() {
    this._element = this._getTemplate();

    //get the card view
    this._cardImage = this._element.querySelector(".card__image");
    this._cardImage.src = this._link;
    // set the alt text
    this._cardImage.alt = this._name;

    // select the card title element
    // set textcontent of card title element

    this._cardTitle = this._element.querySelector(".card__title");
    this._cardTitle.textContent = this._name;

    //set event listeners
    this._setEventListener();
    //return the card
    return this._element;
  }
}
