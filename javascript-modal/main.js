var modalOpen = false;
var openModalButton = document.querySelector('.open-modal-button');
openModalButton.addEventListener('click', openModal);

var closeModalButton = document.querySelector('.close-modal-button');
closeModalButton.addEventListener('click', closeModal);

var modal = document.querySelector('.modal');

var container = document.querySelector('.container');

function openModal() {
  if (modalOpen === false) {
    modal.className = 'modal';
    container.className = 'container';
  }
  modalOpen = true;
}

function closeModal() {
  if (modalOpen === true) {
    modal.className = 'modal invisible';
    container.className = 'container invisible';
  }
  modalOpen = false;
}
