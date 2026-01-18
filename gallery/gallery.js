const menuDisplay = document.getElementById('menuDisplay');
const nav = document.getElementById('nav');


function home() {
  window.location.href = '/';
}

function openMenu() {
  menuDisplay.classList.add('show');
  nav.classList.add('nav-hidden');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuDisplay.classList.remove('show');
  nav.classList.remove('nav-hidden');
  document.body.style.overflow = '';
}

const lightbox = GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  loop: true,
  zoomable: true,
})