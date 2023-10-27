import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._previewImage = this._popupElement.querySelector(".modal__image");
    this._previewText = this._popupElement.querySelector(
      ".modal__image-caption"
    );
  }

  open(name, link) {
    this._previewImage.src = link;
    this._previewImage.alt = name;
    this._previewText.textContent = name;
    super.open();
  }
}
