const menuDisplay = document.getElementById('menuDisplay')

const nav = document.getElementById('nav');

window.addEventListener(('scroll'), () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 50) {
    nav.classList.add('bg-white');
  } else {
    nav.classList.remove('bg-white')
  }
})

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