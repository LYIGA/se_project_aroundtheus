export default class Card {
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    handleImageClick,
    handleDeleteConfirmSubmit,
    handleCardLike
  ) {
    this._name = name;
    this._link = link;
    this.cardId = _id;
    this.isLiked = isLiked;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteConfirmSubmit = handleDeleteConfirmSubmit;
    this._handleCardLike = handleCardLike;
    this._confirmDeleteImagePopup = document.querySelector(
      "#confirm-delete-form"
    );
    this._data = {
      location: this._name,
      link: this._link,
    };
  }

  _getTemplate() {
    const _cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._cardElement = _cardElement;
    return _cardElement;
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
    this._cardElement = this._getTemplate();
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteCardButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    const cardTitle = this._cardElement.querySelector(".card__title");
    cardTitle.textContent = this._name;
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardImage.setAttribute("src", this._link);
    this._cardImage.setAttribute("alt", this._name);
    this._setEventListeners();
    this._renderLikes();
    return this._cardElement;
  }
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });

    this._deleteCardButton.addEventListener("click", () => {
      this._handleDeleteClick(this);
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }
  updateLikeStatus(isLiked) {
    this.isLiked = isLiked;
    this._renderLikes();
  }
  _renderLikes() {
    if (this.isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }
  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  getId() {
    return this.id;
  }
}
