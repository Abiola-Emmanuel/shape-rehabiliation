AOS.init({
  once: true
})

const menuDisplay = document.getElementById('menuDisplay');
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

const accountNumber = document.getElementById('accountNumber');
const statusMessage = document.getElementById('statusMessage');


function copyAccount() {
  navigator.clipboard.writeText(accountNumber.textContent)
    .then(() => {
      statusMessage.textContent = 'Account number copied successfully!';
      statusMessage.style.color = 'green';
      statusMessage.style.textAlign = 'center'
      statusMessage.style.marginTop = '20px'
    })
    .catch(err => {
      statusMessage.textContent = 'Failed to copy text. Please try again.';
      statusMessage.style.color = 'red';
    });

  setTimeout(() => {
    statusMessage.textContent = ''
  }, 3000)
}


document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.accordion .item');

  if (!items.length) return;

  items.forEach(item => {
    const content = item.querySelector('.content-wrap');
    if (item.getAttribute('aria-expanded') === 'true') {
      content.style.maxHeight = content.scrollHeight + 'px';
      const btn = item.querySelector('.trigger');
      if (btn) btn.setAttribute('aria-expanded', 'true');
    }
  });

  items.forEach(item => {
    const btn = item.querySelector('.trigger');
    const content = item.querySelector('.content-wrap');
    if (!btn || !content) return;

    btn.addEventListener('click', () => {
      const isOpen = item.getAttribute('aria-expanded') === 'true';

      items.forEach(i => {
        i.setAttribute('aria-expanded', 'false');
        const b = i.querySelector('.trigger');
        const c = i.querySelector('.content-wrap');
        if (b) b.setAttribute('aria-expanded', 'false');
        if (c) c.style.maxHeight = null;
      });

      if (!isOpen) {
        item.setAttribute('aria-expanded', 'true');
        btn.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});