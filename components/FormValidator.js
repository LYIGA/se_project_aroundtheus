export class FormValidator {
  constructor(options, formEl) {
    this._formEl = formEl;
    this._formSelector = options._formSelector;
    this._inputSelector = options._inputSelector;
    this._submitButtonSelector = options._submitButtonSelector;
    this._inactiveButtonClass = options._inactiveButtonClass;
    this._inputErrorClass = options._inputErrorClass;
    this._errorClass = options._errorClass;
  }
  enableValidation() {
    this._formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    this._setEventListeners();
  }

  _setEventListeners() {
    this.inputEls = [...this._formEl.querySelectorAll(this._inputSelector)];
    this.submitButton = this._formEl.querySelector(this._submitButtonSelector);
    this.inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(inputEl);
        this.toggleButtonState();
      });
    });
  }
  _showInputError(inputEl) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(errorClass);
  }
  _hideInputError(inputErrorClass) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(errorClass);
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl);
    } else {
      this._hideInputError(inputEl);
    }
  }

  toggleButtonState() {
    if (hasInvalidInput(this.inputEls)) {
      this.disableButton();
      return;
    }
  }
  enableButton() {
    this.submitButton.classList.remove(this.inactiveButtonClass);
    submitButton.disabled = false;
  }

  disableButton() {
    this.submitButton.classList.add(this.inactiveButtonClass);
    this.submitButton.disabled = true;
    return;
  }
}
