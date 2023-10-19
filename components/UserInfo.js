export default class UserInfo {
  constructor(userNameSelector, jobSelector) {
    this._name = document.querySelector(userNameSelector);
    this._title = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const info = {
      name: this._name.textContent,
      title: this._title.textContent,
    };
    return info;
    //returns an object with info about the user.
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._title.textContent = data.title;
    //takses a new user data and adds it on the page.
  }
}
