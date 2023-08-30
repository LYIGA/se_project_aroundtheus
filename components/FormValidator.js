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
    const inputEls = [...formEl.querySelectorAll(this._inputSelector)];
    const submitButton = formEl.querySelector(this._submitButtonSelector);
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(formEl, inputEl, options);
        toggleButtonState(inputEls, submitButton, options);
      });
    });
  }
  _showInputError(inputEl) {
    const inputElId = `${inputEl.id}-error`;
    const errorEl = this._formEl.querySelector();
  }
  _hideInputError() {}
  _checkValidity(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl);
    } else {
      this._hideInputError(inputEl);
    }
  }
}
