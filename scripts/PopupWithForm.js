import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }
  setEventListeners() {
    this._popupForm.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
    });
  }
  open() {
    super.open();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  _getInputValues() {
    const inputData = {};
  }
}
