'use strict';

const btnEl = document.querySelectorAll('.btn');
const btnSubmit = document.querySelector('.btn-submit');
const rateBox = document.querySelector('.visible');
const thanksBox = document.querySelector('.box-thanks');
let rate;

// set all buttons unchecked
const uncheckButton = function () {
  for (let i = 0; i < btnEl.length; i++) {
    btnEl.forEach(btnEl => {
      btnEl.classList.remove('btn-checked');
    });
  }
};

// set button checked
btnEl.forEach(btnEl => {
  btnEl.addEventListener('click', function () {
    uncheckButton();
    btnEl.classList.add('btn-checked');
    rate = btnEl.textContent;
  });
});

btnSubmit.addEventListener('click', function () {
  if (rate) {
    rateBox.classList.remove('visible');
    rateBox.classList.add('hidden');
    thanksBox.classList.remove('hidden');
    document.querySelector('.rate').textContent = rate + " ";
  }
});
