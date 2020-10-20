var modalOpen = false;
var openModalButton = document.querySelector('.open-modal-button');
openModalButton.addEventListener('click', openModal);

var closeModalButton = document.querySelector('.close-modal-button');
closeModalButton.addEventListener('click', closeModal);

var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');

var container = document.querySelector('.container');

function openModal() {
  if (modalOpen === false) {
    modal.className = 'modal visible';
    overlay.className = 'overlay visible';
    container.className = 'container visible';
  }
  modalOpen = true;
}

function closeModal() {
  if (modalOpen === true) {
    modal.className = 'modal';
    overlay.className = 'overlay';
    container.className = 'container';
  }
  modalOpen = false;
}
