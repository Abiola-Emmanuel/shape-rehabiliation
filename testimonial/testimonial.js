const menuDisplay = document.getElementById('menuDisplay')
const mtTracks = document.querySelectorAll('.mt-track');


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

function setupMobileTouchControls() {
  mtTracks.forEach(track => {
    let isPressed = false;
    let startX;
    let scrollLeft;

    // Touch events
    track.addEventListener('touchstart', (e) => {
      isPressed = true;
      startX = e.touches[0].pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.cursor = 'grabbing';
      track.style.animationPlayState = 'paused';

      // Also pause the other track for consistency
      const otherTrack = track.classList.contains('left')
        ? document.querySelector('.mt-track.right')
        : document.querySelector('.mt-track.left');
      if (otherTrack) {
        otherTrack.style.animationPlayState = 'paused';
      }
    });

    track.addEventListener('touchmove', (e) => {
      if (!isPressed) return;
      e.preventDefault();
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5; // Scroll multiplier
      track.scrollLeft = scrollLeft - walk;
    });

    track.addEventListener('touchend', () => {
      isPressed = false;
      track.style.cursor = 'grab';

      // Auto-resume animation after 3 seconds of inactivity
      setTimeout(() => {
        if (!isPressed) {
          track.style.animationPlayState = 'running';
          const otherTrack = track.classList.contains('left')
            ? document.querySelector('.mt-track.right')
            : document.querySelector('.mt-track.left');
          if (otherTrack) {
            otherTrack.style.animationPlayState = 'running';
          }
        }
      }, 3000);
    });

    track.addEventListener('mousedown', (e) => {
      if (window.innerWidth > 768) return;

      isPressed = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.cursor = 'grabbing';
      track.style.animationPlayState = 'paused';

      const otherTrack = track.classList.contains('left')
        ? document.querySelector('.mt-track.right')
        : document.querySelector('.mt-track.left');
      if (otherTrack) {
        otherTrack.style.animationPlayState = 'paused';
      }
    });

    track.addEventListener('mousemove', (e) => {
      if (!isPressed || window.innerWidth > 768) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });

    track.addEventListener('mouseup', () => {
      if (window.innerWidth > 768) return;
      isPressed = false;
      track.style.cursor = 'grab';

      setTimeout(() => {
        if (!isPressed) {
          track.style.animationPlayState = 'running';
          const otherTrack = track.classList.contains('left')
            ? document.querySelector('.mt-track.right')
            : document.querySelector('.mt-track.left');
          if (otherTrack) {
            otherTrack.style.animationPlayState = 'running';
          }
        }
      }, 3000);
    });

    track.addEventListener('mouseleave', () => {
      if (window.innerWidth > 768) return;
      isPressed = false;
      track.style.cursor = 'grab';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupMobileTouchControls();

  if (window.innerWidth <= 768) {
    createMobileControls();
  }
});