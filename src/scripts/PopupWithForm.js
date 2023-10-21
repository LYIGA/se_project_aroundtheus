import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputList = this._popupForm.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
  }
  setEventListeners() {
    this._popupForm.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
    });

    super.setEventListeners();
  }
  open() {
    super.open();
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  _getInputValues() {
    const inputData = {};
    this._inputList.forEach((input) => {
      inputData[input.name] = input.value;
    });
    return inputData;
  }
}
