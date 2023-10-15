export default class UserInfo {
  constructor({ nameSelector, titleSelector }) {
    this._name = document.querySelector(nameSelector);
    this._title = document.querySelector(titleSelector);
  }
}
