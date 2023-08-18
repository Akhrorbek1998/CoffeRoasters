const elsCreatePlan = document.querySelectorAll('.create-left-list-child');
const elsOpenButton = document.querySelectorAll('.create-btn');
const elCreateBtnBox = document.querySelectorAll('.create-btn-box');

elsOpenButton.forEach(function (item, index) {
  item.addEventListener('click', function () {
    elsCreatePlan[index].classList.toggle('create-left-list-child-dn');
    elCreateBtnBox[index].classList.toggle('create-btn--active');
  });
});

const elsLabelInput = document.querySelectorAll('.js-label-input');
const elsLabelTitle = document.querySelector('.create-left-title-child');
const elsCapsules = document.querySelector('.capsules');

elsLabelInput.forEach(function (elInput) {
  elInput.addEventListener('click', function () {
    elsCapsules.textContent = elInput.firstElementChild.textContent ;
  });
});

const eslLabelTwo = document.querySelectorAll('.js-two-label');
const elsCapsulesTwo = document.querySelector('.capsules-two');


eslLabelTwo.forEach(function (elInput) {
  elInput.addEventListener('click', function () {
    elsCapsulesTwo.textContent = elInput.firstElementChild.textContent ;
  });
});

const eslLabelTheree = document.querySelectorAll('.js-three-label');
const elsCapsulesThree = document.querySelector('.capsules-three');


eslLabelTheree.forEach(function (elInput) {
  elInput.addEventListener('click', function () {
    elsCapsulesThree.textContent = elInput.firstElementChild.textContent ;
  });
});

const eslLabelFour = document.querySelectorAll('.js-four-label');
const elsCapsulesFour = document.querySelector('.capsules-four');


eslLabelFour.forEach(function (elInput) {
  elInput.addEventListener('click', function () {
    elsCapsulesFour.textContent = elInput.firstElementChild.textContent ;
  });
});

const eslLabelFive = document.querySelectorAll('.js-five-label');
const elsCapsulesFive = document.querySelector('.capsules-five');


eslLabelFive.forEach(function (elInput) {
  elInput.addEventListener('click', function () {
    elsCapsulesFive.textContent = elInput.firstElementChild.textContent ;
  });
});
