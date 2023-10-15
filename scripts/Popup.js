export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
  }

  _handleEscClose(evt) {
    // if (evt.key === "Escape") {
    console.log("i esc key");
    // this.close();
    // }
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        this.close();
      }

      if (evt.target.classList.contains("modal__close")) {
        this.close();
      }
    });
    this._handleEscClose();
    // this._popupElement.addEventListener("keydown", (e) =>
    //   this._handleEscClose(e)
    // );
  }
}
