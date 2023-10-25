import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import './index.css';
// import { initialCards } from "../utils/Constants.js";

import {
  initialCards,
  profileModal,
  profileModalCloseButton,
  profileModalForm,
  editProfileButton,
  profileFormElement,
  profileTitle,
  profileTitleEdit,
  profileDescriptionEdit,
  addCardButton,
  addCardModal,
  addCardCloseButton,
  addCardSubmit,
  addCardTitle,
  cardList,
  cardTemplate,
  previewImageClose,
  previewImageTitle,
  modals,
  descriptionJob,
  addCardForm,
} from "../utils/Constants.js";
import PopupWithImage from "./PopupWithImage.js";

const userInfo = new UserInfo(".profile__title", ".profile__description");

const newCardModal = new PopupWithForm("#new-card-modal", (data) => {
  const card = createCard({
    name: data.title,
    link: data.url,
  });
  section.addItem(card);
  newCardModal.close();


});
newCardModal.setEventListeners();
const newProfileModal = new PopupWithForm("#profile-edit-modal", (data) => {
  userInfo.setUserInfo(data);
  newProfileModal.close();
});
newProfileModal.setEventListeners();

editProfileButton.addEventListener("click", fillProfileForm);

function fillProfileForm() {
  const userData = userInfo.getUserInfo();
  profileTitleEdit.value = userData.name;
  profileDescriptionEdit.value = userData.title;
  newProfileModal.open();
}

addCardButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  newCardModal.open();
});

// const newModalImage = new PopupWithImage('#modal__image');

function handleImageClick(name, link) {
  // myPopupWithImage.open(name, link);
  // previewImageElement.setAttribute("src", link);
  // previewImageElement.setAttribute("alt", name);
  // openModal(previewImageModal);
  // previewImageTitle.textContent = data.name;
}

addCardSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = e.target.title.value;
  const image = e.target.link.value;
  const card = createCard({
    name: title,
    link: image,
  });
  cardList.prepend(card);
  closeModal(addCardModal);
  e.target.reset();
  addFormValidator.toggleButtonState();
});

// initialCards.forEach(function (data) {
//   const cardElement = createCard(data);
//   cardList.prepend(cardElement);
// });

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  return card.getView();
}

const editFormValidator = new FormValidator(config, profileModalForm);
const addFormValidator = new FormValidator(config, addCardForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

const section = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const cardElement = createCard(cardData);
      section.addItem(cardElement);
    },
  },
  ".cards__list"
);
section.rendererItems();
