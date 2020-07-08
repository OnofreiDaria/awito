'use strict';

const modalAdd = document.querySelector('.modal__add'),
  btnAdd = document.querySelector('.add__ad'),
  modalBtnSubmit = document.querySelector('.modal__btn-submit'),
  modalSubmit = document.querySelector('.modal__submit'),
  catalog = document.querySelector('.catalog'),
  modalItem = document.querySelector('.modal__item');

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
document.addEventListener('keydown', event => {
  if(event.keyCode === 27) {
    if(!modalAdd.classList.contains('hide')){
      modalAdd.classList.add('hide');
      modalSubmit.reset();
    }

  }
});
catalog.addEventListener('click', event => {
  const target = event.target;
  if(target.closest('li')) {
    modalItem.classList.remove('hide');
  }

});
modalItem.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('modal__close') ||
    target === modalItem ) {
    modalItem.classList.add('hide');
  }
});
