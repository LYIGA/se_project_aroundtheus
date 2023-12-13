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
  config,
  avatarForm,
} from "../utils/Constants.js";
// import PopupWithImage from "../components/PopupWithImage.js";

const api = new Api(
  {
    headers: {
      authorization: "894d7be5-6631-4bd2-8600-f51b6f91dfe6",
      "Content-Type": "application/json",
    },
  },
  "https://around-api.en.tripleten-services.com/v1"
);

api
  .getUserInfo()
  .then((res) => {
    console.log(res);
    userInfo.setUserInfo(res);
    userInfo.setAvatarImg(res);
  })
  .catch((err) => {
    console.log(err);
  });

const avatarPopup = new PopupWithForm("#avatar-edit-modal", (avatar) => {
  avatarPopup.renderLoading(true);
  api
    .updateAvatar(avatar)
    .then((res) => {
      userInfo.setAvatarImg(res);
      avatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarPopup.renderLoading(false);
    });
});
avatarPopup.setEventListeners();

avatarContainer.addEventListener("click", () => {
  avatarFormValidator.toggleButtonState();
  avatarPopup.open();
});

// api.updateUserInfo();
const userInfo = new UserInfo(
  ".profile__title",
  ".profile__description",
  ".profile__image"
);

const newCardModal = new PopupWithForm("#new-card-modal", (data) => {
  newCardModal.renderLoading(true);
  api
    .addCard(data)
    .then((res) => {
      const card = createCard(res);
      section.addItem(card);
      newCardModal.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      newCardModal.renderLoading(false);
    });
});
newCardModal.setEventListeners();
const newProfileModal = new PopupWithForm("#profile-edit-modal", (data) => {
  newProfileModal.renderLoading(true);
  api
    .updateUserInfo({ name: data.name, about: data.title })
    .then((newUserObj) => {
      userInfo.setUserInfo({ name: newUserObj.name, about: newUserObj.about });
      newProfileModal.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      newProfileModal.renderLoading(false);
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
    deleteCardConfirm.renderLoading(true);
    api
      .deleteCard(card.cardId)
      .then(() => {
        deleteCardConfirm.close();
        card.handleDeleteCard();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        deleteCardConfirm.renderLoading(false);
      });
  });
}

function handleLikeClick(card) {
  if (card.isLiked) {
    api
      .unlikeCard(card.cardId)
      .then((res) => {
       card.updateLikeStatus(res.isLiked)
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    console.log(card.cardId);
    api
      .likeCard(card.cardId)
      .then((res) => {
        card.updateLikeStatus(res.isLiked)
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

const editFormValidator = new FormValidator(config, profileModalForm);
const addFormValidator = new FormValidator(config, addCardForm);
const avatarFormValidator = new FormValidator(config, avatarForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();

let section;

api
  .getInitialCards()
  .then((cards) => {
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
  })
  .catch((err) => {
    console.error(err);
  });
