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

      setEventListeners(formEl, options);
    });

    this._inputList = [...document.querySelectorAll(options._inputSelector)];
    this._inputList.forEach((inputlist) => {
      this._inputList.addEventListener("input", (e) => {
        this._checkVailidity();
      });
    });
  }
  _checkVailidity(inputEl) {
    if (inputEl.validity.valid) {
    } else {
    }
  }
}
