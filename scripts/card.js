export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    // .card__like-button
    this._cardElment
      .querySelector(".card__like-button")
      .addEventListeners("click", () => {
        this._handleLikeIcon();
      });

    //.card__delete-button
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListeners("click", () => {
        this._handleDeletCard();
      });
  }

  _handleDeletCard() {
    this._cardElement.remove();
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  getView() {
    this._cardSelector = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    //get the cars view
    //set event listeners
    this._setEventListeners();
    //return the card
  }
}
