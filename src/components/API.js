export default class Api {
  constructor() {}

  getUserInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
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
}
