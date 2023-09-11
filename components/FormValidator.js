export class FormValidator {
  constructor(options, formEl) {
    this._formEl = formEl;
    this._formSelector = options.formSelector;
    this._inputSelector = options.inputSelector;
    this._submitButtonSelector = options.submitButtonSelector;
    this._inactiveButtonClass = options.inactiveButtonClass;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClass = options.errorClass;
  }
  enableValidation() {
    this._formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    this._setEventListener();
  }

  _setEventListener() {
    this.inputEls = [...this._formEl.querySelectorAll(this._inputSelector)];

    this.submitButton = this._formEl.querySelector(this._submitButtonSelector);
    console.log(this.inputEls, this._inputSelector);
    this.inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        console.log(e, inputEl);
        this._checkInputValidity(inputEl);
        this.toggleButtonState();
      });
    });
  }
  _showInputError(inputEl) {
    const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }
  _hideInputError(inputEl) {
    const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl);
    } else {
      this._hideInputError(inputEl);
    }
  }

  _hasInvalidInput() {
    return this.inputEls.some((inputEl) => {
      return !inputEl.validity.valid;
    });
  }

  toggleButtonState() {
    console.log("hello", this.inputEls);
    if (this._hasInvalidInput(this.inputEls)) {
      this.disableButton();
      return;
    } else {
      // call enable button
      this.enableButton();
    }
  }
  enableButton() {
    this.submitButton.classList.remove(this._inactiveButtonClass);
    console.log(this._inactiveButtonClass);
    this.submitButton.disabled = false;
  }

  disableButton() {
    this.submitButton.classList.add(this._inactiveButtonClass);
    this.submitButton.disabled = true;
    return;
  }
}
