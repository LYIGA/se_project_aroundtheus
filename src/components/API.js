export default class Api {
  constructor({ headers }, url) {
    this._baseUrl = url;
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateUserInfo(userInfo) {
    // assuming that userInfo looks like { name: '', about: ''}
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      body: JSON.stringify(userInfo),
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateAvatar(avatar) {
    return fetch(this._baseUrl + "/users/me/avatar", {
      method: "PATCH",
      body: JSON.stringify(avatar),
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(this._baseUrl + "/cards", {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addCard(card) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: card.title,
        link: card.url,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(this._baseUrl + `/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  likeCard(cardId) {
    return fetch(this._baseUrl + `/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  unlikeCard(cardId) {
    return fetch(this._baseUrl + `/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject("Error: something is wrong with api");
  }

  loadPageContent() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }
}
