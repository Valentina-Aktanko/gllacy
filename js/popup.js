let feedbackFormButton = document.querySelector(".contacts__button");

let popupFeedback = document.querySelector(".modal-feedback");
let overlay = document.querySelector(".modal-overlay");
let modalClose = document.querySelector(".modal__close-btn");

let feedbackForm = popupFeedback.querySelector(".feedback-form");
let feedbackName = popupFeedback.querySelector("[name=name]");
let feedbackEmail = popupFeedback.querySelector("[name=email]");
let feedbackText = popupFeedback.querySelector("[name=text]");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

// Открывает popup с формой и overlay
feedbackFormButton.addEventListener("click", function (event) {
  event.preventDefault();
  popupFeedback.classList.add("modal-show");
  overlay.classList.add("overlay-show");

  if (storageName) {
    feedbackName.value = storageName;
    feedbackEmail.focus();
  } else {
    feedbackName.focus();
  }
  
  if (storageEmail) {
    feedbackEmail.value = storageEmail;
    feedbackText.focus();
  }
});

// Закрывает popup с формой и overlay
modalClose.addEventListener("click", function(event) {
  event.preventDefault();
  popupFeedback.classList.remove("modal-show");
  popupFeedback.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

// Поведение при отправке формы при незаполненном поле
feedbackForm.addEventListener("submit", function(event) {
  if (!feedbackName.value || !feedbackEmail.value) {
    event.preventDefault();
    popupFeedback.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", feedbackName.value);
    localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

// Закрытие popup и overlay при нажатии Esc
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popupFeedback.classList.contains("modal-show") && overlay.classList.contains("overlay-show")) {
      event.preventDefault();
      popupFeedback.classList.remove("modal-show");
      popupFeedback.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    }
  }
});