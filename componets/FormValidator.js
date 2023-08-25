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
}
