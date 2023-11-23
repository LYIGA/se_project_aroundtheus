const object1 = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const object2 = {
  name: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
};

const object3 = {
  name: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
};

const object4 = {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
};

const object5 = {
  name: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
};

const object6 = {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
};

export const initialCards = [
  object1,
  object2,
  object3,
  object4,
  object5,
  object6,
];

export const avatarContainer = document.querySelector('.profile__avatar-container');
export const avaterModal = document.querySelector("#avatar-edit-modal");
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
export const profileDescriptionEdit = avaterModal.querySelector(
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
