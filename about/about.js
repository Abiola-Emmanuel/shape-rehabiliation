AOS.init({
  once: true
});

const menuDisplay = document.getElementById('menuDisplay')

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
