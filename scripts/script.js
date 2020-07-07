'use strict';

const modalAdd = document.querySelector('.modal__add'),
  btnAdd = document.querySelector('.add__ad'),
  modalBtnSubmit = document.querySelector('.modal__btn-submit'),
  modalSubmit = document.querySelector('.modal__submit');

btnAdd.addEventListener('click', () => {
  modalAdd.classList.remove('hide');
  modalBtnSubmit.disabled = true;
});

modalAdd.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('modal__close') ||
  target === modalAdd ) {
    modalAdd.classList.add('hide');
    modalSubmit.reset();
  }
});
modalAdd.addEventListener('keyup', event => {
  if(event.key === 27) {
    modalAdd.classList.add('hide');
    modalSubmit.reset();
  }
});
