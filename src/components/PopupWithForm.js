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

// isLoading should either be true or false
  
  // create an if/else statement that checks whether isLoading is true or false
  // if true, change the button text to 'Saving...'
  // if false, change the button text back to the default text.


renderLoading(isLoading, loadingText = "Saving...") {
  if (isLoading) {
    this._submitButton.textContent = loadingText;
  } else {
    this._submitButton.textContent = this._submitButtonText;
  }
}


setEventListeners() {
  this._form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    this._handleFormSubmit(this._getInputValues());
  });
  super.setEventListeners();
}

close() {
  this._form.reset();

  super.close();
}


