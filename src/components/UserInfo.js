export default class UserInfo {
  constructor(profileTitle, profileDescription, avatar) {
    this._profileTitle = document.querySelector(profileTitle);
    this._profileDescription = document.querySelector(profileDescription);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    const userInfo = {
      name: this._profileTitle.textContent,
      description: this._profileDescription.textContent,
    };
    return userInfo;
  }

  // TODO: think how can you merge setUserInfo method and setAvatarImg method, in the end of the day one method is better
  setUserInfo({ name, about }) {
    this._profileTitle.textContent = name;
    this._profileDescription.textContent = about;
  }

  setAvatarImg({ avatar }) {
    this._avatar.src = avatar;
  }
}
