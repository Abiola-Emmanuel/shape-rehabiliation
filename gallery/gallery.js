const menuDisplay = document.getElementById('menuDisplay')

function openMenu() {
  menuDisplay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuDisplay.classList.remove('show');
  document.body.style.overflow = '';
}

const lightbox = GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  loop: true,
  zoomable: true,
})