const navUl = document.querySelector(".nav-ul");
const hamburger = document.getElementById('hamburger-menu');
const closeBtn = document.getElementById('close-btn');

const show = () => {
  navUl.classList.add('show');
}

const close = () => {
  navUl.classList.remove('show');
}


hamburger.addEventListener('click', show);
closeBtn.addEventListener('click', close);
