export default class Api {
  constructor() {}

  getUserInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "GET",
      headers: {
        authorization: "894d7be5-6631-4bd2-8600-f51b6f91dfe6",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((result) => result);
  }

  updateUserInfo(userInfo) {
    // assuming that userInfo looks like { name: '', about: ''}
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      body: JSON.stringify(userInfo),
      headers: {
        authorization: "894d7be5-6631-4bd2-8600-f51b6f91dfe6",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((result) => result);
  }

  updateAvatar(avatar) {
    return fetch(
      "https://around-api.en.tripleten-services.com/v1/users/me/avatar",
      {
        method: "PATCH",
        body: JSON.stringify(avatar),
        headers: {
          authorization: "894d7be5-6631-4bd2-8600-f51b6f91dfe6",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((result) => result);
  }
}
