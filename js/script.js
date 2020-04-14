let feedbackFormLink = document.querySelector(".contacts__button");

feedbackFormLink.addEventListener("click", function (event) {
  event.preventDefault();
  
  let popup = document.querySelector(".modal-feedback");
  let overlay = document.querySelector(".modal-overlay");
  
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show");
});