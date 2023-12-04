import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopUpWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
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
  avatarContainer,
} from "../utils/Constants.js";
import PopupWithImage from "../components/PopupWithImage.js";

const api = new Api({
  headers: {
    authorization: "894d7be5-6631-4bd2-8600-f51b6f91dfe6",
  },
});

api.getUserInfo().then((res) => {
  console.log(res);
  userInfo.setUserInfo(res);
  userInfo.setAvatarImg(res);
});

const avatarPopup = new PopupWithForm("#avatar-edit-modal", (avatar) => {
  api.updateAvatar(avatar).then((res) => {
    userInfo.setAvatarImg(res);
    avatarPopup.close();
  });
});
avatarPopup.setEventListeners();

avatarContainer.addEventListener("click", () => {
  avatarPopup.open();
});

// api.updateUserInfo();
const userInfo = new UserInfo(
  ".profile__title",
  ".profile__description",
  ".profile__image"
);

const newCardModal = new PopupWithForm("#new-card-modal", (data) => {
  api.addCard(data).then((res) => {
    const card = createCard(res);
    section.addItem(card);
    newCardModal.close();
  });
});
newCardModal.setEventListeners();
const newProfileModal = new PopupWithForm("#profile-edit-modal", (data) => {
  newProfileModal.renderLoading(true);
  api
    .updateUserInfo({ name: data.name, about: data.title })
    .then((newUserObj) => {
      newProfileModal.renderLoading(false);
      userInfo.setUserInfo({ name: newUserObj.name, about: newUserObj.about });
      newProfileModal.close();
    });
});
newProfileModal.setEventListeners();

editProfileButton.addEventListener("click", fillProfileForm);

function fillProfileForm() {
  const userData = userInfo.getUserInfo();
  console.log(userData, profileDescriptionEdit);
  profileTitleEdit.value = userData.name;
  profileDescriptionEdit.value = userData.about;
  newProfileModal.open();
}

addCardButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  newCardModal.open();
});

const imagePopUp = new PopUpWithImage("#image-modal", handleImageClick);
imagePopUp.setEventListeners();

const deleteCardConfirm = new PopupWithConfirmation("#delete-card-modal");
deleteCardConfirm.setEventListeners();
// deleteCardConfirm.setSubmitAction(() => {
//   api.deleteCard(Card._cardId).then(() => {
//     deleteCardConfirm.close();
//     Card._handleDeleteIcon();
//   });
// });

function handleImageClick(name, link) {
  imagePopUp.open(name, link);
}

// handle form submit //
function handleAddCardSubmit({ title, url }) {
  api.addNewCard({ name: title, link: url }).then((data) => {
    console.log(data);

    section.addItem(data);
  });
}

addCardSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = e.target.title.value;
  const image = e.target.link.value;
  const card = createCard({
    name: title,
    link: image,
  });
  // cardList.prepend(card);
  section.addItem(card);
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
  const card = new Card(
    cardData,
    "#card-template",
    handleImageClick,
    handleLikeClick,
    handleDeleteClick
  );
  return card.getView();
}

function handleDeleteClick(card) {
  deleteCardConfirm.open();
  deleteCardConfirm.setSubmitAction(() => {
    api.deleteCard(card.cardId).then(() => {
      deleteCardConfirm.close();
      card._handleDeleteCard();
    });
  });
}

function handleLikeClick(card) {
  if (card.isLiked) {
    api.unlikeCard(card.cardId).then(() => {
      card._handleLikeIcon();
    });
  } else {
    console.log(card.cardId);
    api.likeCard(card.cardId).then(() => {
      card._handleLikeIcon();
    });
  }
}

const editFormValidator = new FormValidator(config, profileModalForm);
const addFormValidator = new FormValidator(config, addCardForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

let section;

api.getInitialCards().then((cards) => {
  section = new Section(
    {
      items: cards,
      renderer: (cardData) => {
        const cardElement = createCard(cardData);
        section.addItem(cardElement);
      },
    },
    ".cards__list"
  );
  section.rendererItems();
});

fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
  headers: {
    authorization: "894d7be5-6631-4bd2-8600-f51b6f91dfe6",
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });
