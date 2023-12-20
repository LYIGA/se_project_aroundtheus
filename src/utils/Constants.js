

export const avatarContainer = document.querySelector(
  ".profile__avatar-container"
);
export const avaterModal = document.querySelector("#avatar-edit-modal");
export const avatarForm = avaterModal.querySelector('.modal__form');
export const profileModalCloseButton =
  avaterModal.querySelector(".modal__close");
export const profileModalForm = avaterModal.querySelector(".modal__form");
export const editProfileButton = document.querySelector(
  ".profile__edit-button"
);
export const profileFormElement = document.querySelector(".profile__info");
export const profileTitle = profileFormElement.querySelector(".profile__title");
export const descriptionJob = profileFormElement.querySelector(
  ".profile__description"
);
export const profileTitleEdit = document.querySelector("#profile-title-input");
export const profileDescriptionEdit = document.querySelector(
  "#profile-description-input"
);

export const addCardButton = document.querySelector(".profile__add-button");
export const addCardModal = document.querySelector("#new-card-modal");
export const addCardCloseButton = addCardModal.querySelector(".modal__close");
export const addCardForm = addCardModal.querySelector("#add-card-form");
export const addCardSubmit = addCardModal.querySelector(
  "#add-card-modal-save-button"
);

export const avatar = document.querySelector("#avatar-url");
export const deleteCardModal = document.querySelector("#delete-card-modal");
export const avatarEditImg = document.querySelector(".profile__img");
export const editProfileForm = document.querySelector("#profile-edit-form");
export const addCardTitle = addCardModal.querySelector(
  ".modal__input_type_title"
);

export const cardList = document.querySelector(".cards__list");
export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

export const previewImageModal = document.querySelector("#image-modal");
export const previewImageElement = document.querySelector(".modal__image");
export const previewImageClose =
  previewImageModal.querySelector(".modal__close");
export const previewImageTitle = document.querySelector(
  ".modal__image-caption"
);

export const modals = document.querySelectorAll(".modal");


export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};