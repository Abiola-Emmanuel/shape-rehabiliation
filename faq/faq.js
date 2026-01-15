AOS.init({
  once: true
})

const menuDisplay = document.getElementById('menuDisplay')

function home() {
  window.location.href = '/';
}


function openMenu() {
  menuDisplay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuDisplay.classList.remove('show');
  document.body.style.overflow = '';
}