
const navUl = document.querySelector(".nav-ul");
const hamburger = document.getElementById('hamburger-menu');
const closeBtn = document.getElementById('close-btn');

const show = () => {
  navUl.style.display = 'flex';
  hamburger.style.display = 'none';
}

const close = () => {
  navUl.style.display = 'none';
  hamburger.style.display = 'block';
}


hamburger.addEventListener('click', show);
closeBtn.addEventListener('click', close);
