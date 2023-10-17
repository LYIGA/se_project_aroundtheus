import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
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
} from "../utils/Constants.js";

const newCardModal = new PopupWithForm("#new-card-modal", () => {});
newCardModal.setEventListeners();
const newProfileModal = new PopupWithForm("#profile-edit-modal", () => {});
newProfileModal.setEventListeners();

function openModal(modal) {
  // modal.classList.add("modal_opened");
  // document.addEventListener("keydown", closeByEscape);
}

const userInfo = new UserInfo(".profile__title", ".profile__description");

function fillProfileForm() {
  newProfileModal.open();
  const userData = userInfo.getUserInfo();
  profileTitleEdit.value = userData.name;
  profileDescriptionEdit.value = userData.title;
}

editProfileButton.addEventListener("click", fillProfileForm);

addCardButton.addEventListener("click", () => {
  newCardModal.open();
});

function closeModal(modal) {
  // modal.classList.remove("modal_opened");
  // document.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

function handleImageClick(name, link) {
  previewImageElement.setAttribute("src", link);
  previewImageElement.setAttribute("alt", name);
  openModal(previewImageModal);
  previewImageTitle.textContent = data.name;
}

profileModalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleEdit.value;
  descriptionJob.textContent = profileDescriptionEdit.value;
  closeModal(profileModal);
});

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

function createCard(initialCards) {
  const card = new Card(initialCards, "#card-template", handleImageClick);
  return card.getView();
}

const editFormValidator = new FormValidator(config, profileModalForm);
const addFormValidator = new FormValidator(config, addCardSubmit);
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
