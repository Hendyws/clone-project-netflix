// DROP_TRANSLATE

const btnMenu = document.querySelector('.select');
function toggleMenu () {
  const navMenu = document.querySelector('.select');
  navMenu.classList.toggle('active');
};

btnMenu.addEventListener('click', toggleMenu);

// if (btnMenu.innerText = pt.innerText) {
//   document.querySelectorAll('.select li')[0].style.color = '#1e90ff';
// } else {
//   document.querySelectorAll('.select li')[1].style.color = '#1e90ff';
// }

//CHANGE_TRANSLATE_BTN

let pt = document.querySelectorAll('.select li')[0];
let en = document.querySelectorAll('.select li')[1];
function changePt () {
  document.querySelector('.contentsel').innerText = pt.innerText;
}
function changeEn () {
  document.querySelector('.contentsel').innerText = en.innerText;
}
pt.addEventListener('click', changePt);
en.addEventListener('click', changeEn);

//ANIMATION - EMAIL

// const animaEmail = document.querySelector('#email');
const screenDark = document.querySelector('.bg-dark');
function animationText () {
  const textEmail = document.querySelector('.label');
  textEmail.classList.toggle('onemail');
}
// animaEmail.addEventListener('click', animationText);
screenDark.addEventListener('click', animationText);


//DROP-QUESTION


// const btnDrop = document.querySelectorAll('.btn-drop')[1];
// function toggleDrop () {
//   let questionOne = document.querySelectorAll('.answer')[1];
//   const dropAnswer = document.querySelectorAll('.btn-drop')[1];
//   dropAnswer.classList.toggle('btn-active');
//   questionOne.classList.toggle('btn-active');
// };
// btnDrop.addEventListener('click', toggleDrop);


function toggleDrop (x) {
  let questionOne = document.querySelectorAll('.answer')[x];
  const dropAnswer = document.querySelectorAll('.btn-drop')[x];
  dropAnswer.classList.toggle('btn-active');
  questionOne.classList.toggle('btn-active');
};