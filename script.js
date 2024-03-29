let popup = document.querySelector(".modal");
let openPopupButton = document.querySelector(".button-open");
let closePopupButton = popup.querySelector(".button-close");

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal-show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal-show');
  }
});
