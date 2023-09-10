import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
// console.log("hello");
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/*--------------------------------------------------- */
/*            Element                                 */
/*--------------------------------------------------- */
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseButton = profileEditModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector(".modal__form-title");
const profileDescriptionInput = document.querySelector(
  ".modal__form-description"
);
const popup = document.querySelectorAll(".modal");
const profileEditForm = document.querySelector("#profile-edit-form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const profileAddCardModal = document.querySelector("#new-card-modal");
const cardAddButton = document.querySelector(".profile__add-button");
const addCloseButton = document.querySelector("#modal-close-card-button");
const cardAddForm = document.querySelector("#add-card-form");
const editProfileForm = document.querySelector("#profile-edit-form");

const previewImgModal = document.querySelector("#image-modal");
const previewImgImage = previewImgModal.querySelector(".modal__image");
const previewImgButton = previewImgModal.querySelector(".modal__close");
//
const addNewCardButton = document.querySelector(".profile__add-button");
const addNewCardModal = document.querySelector("#new-card-modal");

/*----------------------------------------------------------- */
/*                Function                                    */
/*----------------------------------------------------------- */

function closePopup(modal) {
  modal.classList.remove("modal__opened");
  document.removeEventListener("keyup", handleEscape);
}
function openPopUp(modal) {
  modal.classList.add("modal__opened");
  document.addEventListener("keyup", handleEscape);
}

cardAddButton.addEventListener("click", () => {
  addCardValidator.toggleButtonState();
  openPopUp(profileAddCardModal);
});

profileCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);

addCloseButton.addEventListener("click", () => closePopup(profileAddCardModal));

previewImgButton.addEventListener("click", () => closePopup(previewImgModal));

const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

const editProfileValidator = new FormValidator(options, editProfileForm);
editProfileValidator.enableValidation();

const addCardValidator = new FormValidator(options, cardAddForm);
addCardValidator.enableValidation();

const previewImgTitle = document.querySelector(".modal__image-caption");

// function getCardElement(cardData) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImage = cardElement.querySelector(".card__image");
//   const cardTitle = cardElement.querySelector(".card__title");
//   const likeButton = cardElement.querySelector(".card__like-button");

//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("card__like-button_active");
//   });

//   cardImage.src = cardData.link;
//   cardImage.alt = cardData.name;
//   cardTitle.textContent = cardData.name;

//   // const cardDeleteButton = cardElement.querySelector(".card__delete-button");
//   // cardDeleteButton.addEventListener("click", () => {
//   //   cardElement.remove();
//   // });

//   const previewImgTitle = document.querySelector(".modal__image-caption");

//   // TODO: define card eventListsner
//   cardImage.addEventListener("click", () => {
//     // previewImgModal.setAttribute("src", cardImage.getAttribute("src"));
//     previewImgImage.src = cardData.link;
//     previewImgImage.alt = cardData.name;
//     previewImgTitle.textContent = cardData.name;
//     openPopUp(document.querySelector("#image-modal"));
//   });

//   return cardElement;
// }

const handleEscape = (evt) => {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".modal__opened");
    closePopup(activePopup);
  }
};

const createCard = (data) => {
  // console.log("hello");
  return new Card(data, "#card-template", handleCardClick).getView();
};

function handleCardClick(name, link) {
  // previewImgModal.setAttribute("src", cardImage.getAttribute("src"));
  previewImgImage.src = link;
  previewImgImage.alt = name;
  previewImgTitle.textContent = name;
  openPopUp(document.querySelector("#image-modal"));
}

function renderInitialCards(initialCards) {
  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData);
    cardListEl.append(cardElement);
  });
}
renderInitialCards(initialCards);

function fillProfileForm() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function openEditProfileModal() {
  fillProfileForm();
  openPopUp(profileEditModal);
}

/*----------------------------------------------------------- */
/*             Event Handelers                                */
/*----------------------------------------------------------- */
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

/*----------------------------------------------------------- */
/*                   Event Listeners
/*----------------------------------------------------------- */

profileEditButton.addEventListener("click", openEditProfileModal);

cardAddForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const link = e.target.url.value;
  const cardElement = createCard({
    name: title,
    link: link,
  });
  cardListEl.prepend(cardElement);
  closePopup(addNewCardModal);
  cardAddForm.reset();
  // call card form validator's toggleButtonState method
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

const handleClosePopup = (evt) => {
  if (
    evt.target.classList.contains("modal__opened") ||
    evt.target.classList.contains("modal__close")
  ) {
    closePopup(evt.target);
  }
};

popup.forEach((popup) => {
  popup.addEventListener("mousedown", handleClosePopup);
});
