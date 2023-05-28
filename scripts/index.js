const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
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

const profileEditForm = document.querySelector("#edit-profile-form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardEditModal = document.querySelector("#profile-edit-modal");
const cardAddButton = document.querySelector(".profile__add-button");
const AddCloseButton = cardEditModal.querySelector(".modal__close");
const cardAddForm = document.querySelector("#add-card-form");
const previewImgModal = document.querySelector("#modal-preview-image");
const previewImgButton = previewImgModal.querySelector(".modal__close");

const addNewCardButton = document.querySelector(".profile__add-button");
const addNewCardModal = document.querySelector("#add-card-modal");

/*----------------------------------------------------------- */
/*                Function                                    */
/*----------------------------------------------------------- */

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}
function openPopUp(modal) {
  modal.classList.add("modal_opened");
}

cardAddButton.addEventListener("click", () => openPopUp(cardEditModal));

profileCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);

cardAddButton.addEventListener("click", () => closePopup(cardEditModal));

previewImgButton.addEventListener("click", () => closePopup(previewImgModal));

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = cardData.link;
  cardImage.src = cardData.link;

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  const cardLikeButton = cardElement.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button-active");
  });

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  const previewImgTitile = document.querySelector(".modal__image-title");

  // TODO: define card eventListsner
  cardImage.addEventListener("click", () => {
    previewImgModal.setAttribute("src", cardImage.getAttribute("src"));
    previewImgModal.alt = cardData.name;
    previewImgTitile.textContent = cardData.name;
    openPopUp(document.querySelector("modal-preview-image"));
  });

  cardTitle.textContent = cardData.link;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  return cardElement;
}

function renderInitialCards(initialCards) {
  initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
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

profileEditBtn.addEventListener("click", openEditProfileModal);

cardAddForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const link = e.target.link.value;
  const cardElement = getCardElement({
    name: title,
    link: link,
  });
  cardListEl.prepend(cardElement);
  closePopUp(cardEditModal);
  cardAddForm.reset();
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
