let feedbackFormLink = document.querySelector(".contacts__button");
let popup = document.querySelector(".modal-feedback");
let overlay = document.querySelector(".modal-overlay");
let modalClose = document.querySelector(".modal__close-btn");
let feedbackName = popup.querySelector("[name=name]");

feedbackFormLink.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show");

  feedbackName.focus();
});

modalClose.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});