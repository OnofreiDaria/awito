'use strict';

const dataBase = [];

const modalAdd = document.querySelector('.modal__add'),
  btnAdd = document.querySelector('.add__ad'),
  modalBtnSubmit = document.querySelector('.modal__btn-submit'),
  modalSubmit = document.querySelector('.modal__submit'),
  catalog = document.querySelector('.catalog'),
  modalItem = document.querySelector('.modal__item'),
  modalBtnWarning = document.querySelector('.modal__btn-warning');

const elementsModalSubmit = [...modalSubmit.elements]
  .filter(elem => elem.tagName !== 'BUTTON');


const closeModal = function(event) {
  const target = event.target;

  if (target.closest('.modal__close') || target === this) {
    this.classList.add('hide');
    modalSubmit.reset();
  }
};
const closeModalEsc = event => {
  if(event.code === 'Escape') {
    modalAdd.classList.add('hide');
    modalSubmit.reset();
    modalItem.classList.add('hide');
    document.removeEventListener('keydown', closeModalEsc);
  }
};

modalSubmit.addEventListener('input', () => {
  const validForm = elementsModalSubmit.every(elem => elem.value);
  modalBtnSubmit.disabled = !validForm;
  modalBtnWarning.style.display = validForm ? 'none' : '';
});

btnAdd.addEventListener('click', () => {
  modalAdd.classList.remove('hide');
  modalBtnSubmit.disabled = true;
  document.addEventListener('keydown', closeModalEsc);
});

modalAdd.addEventListener('click', closeModal);
modalItem.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalEsc);

catalog.addEventListener('click', event => {
  const target = event.target;
  if (target.closest('.card')) {
    modalItem.classList.remove('hide');
    document.addEventListener('keydown', closeModalEsc);
  }
});

modalSubmit.addEventListener('submit', event => {
  event.preventDefault();
  const itemObj = {};
  for (const elem of elementsModalSubmit) {
    itemObj[elem.name] = elem.value;
  }
  dataBase.push(itemObj);
  modalSubmit.reset();
});
