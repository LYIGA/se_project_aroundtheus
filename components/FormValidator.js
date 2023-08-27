export class FormValidator {
  constructor(options, formEl) {
    this._formEl = formEl;
    this._options = options;
    this._formSelector = options._formSelector;
    this._inputSelector = options._inputSelector;
    this._submitButtonSelector = options._submitButtonSelector;
    this._inactiveButtonClass = options._inactiveButtonClass;
    this._inputErrorClass = options._inputErrorClass;
    this._errorClass = options._errorClass;
  }
  enableValidation(options) {
    const formEls = [...document.querySelectorAll(options.formSelector)];
    formEls.forEach((formEl) => {
      formEl.addEventListener("submit", (e) => {
        e.preventDefault();
      });

      setEventListener(formEl, options);
    });

    this._inputList = [...document.querySelectorAll(options._inputSelector)];
    this._inputList.forEach((listEl) => {
      listEl.addEventListener("input", () => {
        this._checkValidity();
      });
    });
  }

  _showInputError(inputEl, errorMessage) {
    const inputElId = `${inputEl.id}-error`;
    const errorEl = this._formEl.querySelector();
  }
  _hideInputError() {}
  _checkValidity(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  }
}
