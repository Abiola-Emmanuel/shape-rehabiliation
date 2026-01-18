const menuDisplay = document.getElementById('menuDisplay')
const mtTracks = document.querySelectorAll('.mt-track');
let nav;

// Get nav element safely
document.addEventListener('DOMContentLoaded', () => {
  nav = document.getElementById('nav');
});

function home() {
  window.location.href = '/';
}

function openMenu() {
  if (menuDisplay) menuDisplay.classList.add('show');
  if (nav) nav.classList.add('nav-hidden');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  if (menuDisplay) menuDisplay.classList.remove('show');
  if (nav) nav.classList.remove('nav-hidden');
  document.body.style.overflow = '';
}

function setupDesktopHoldControls() {
  // Only run on desktop
  if (window.innerWidth <= 768) return;

  mtTracks.forEach(track => {
    let isHolding = false;
    let resumeTimeout;

    // Start with animation running
    track.style.animationPlayState = 'running';
    track.style.cursor = 'grab';

    // Mouse down to pause animation
    track.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isHolding = true;
      track.style.animationPlayState = 'paused';
      track.style.cursor = 'grabbing';

      // Clear any pending resume timeout
      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      // Also pause the other track
      const otherTrack = track.classList.contains('left')
        ? document.querySelector('.mt-track.right')
        : document.querySelector('.mt-track.left');
      if (otherTrack) {
        otherTrack.style.animationPlayState = 'paused';
      }
    });

    // Mouse up to resume animation after delay
    track.addEventListener('mouseup', () => {
      if (!isHolding) return;

      isHolding = false;
      track.style.cursor = 'grab';

      // Resume after 500ms delay
      resumeTimeout = setTimeout(() => {
        track.style.animationPlayState = 'running';

        // Also resume the other track
        const otherTrack = track.classList.contains('left')
          ? document.querySelector('.mt-track.right')
          : document.querySelector('.mt-track.left');
        if (otherTrack) {
          otherTrack.style.animationPlayState = 'running';
        }
      }, 500);
    });

    // Mouse leave while holding - resume immediately
    track.addEventListener('mouseleave', () => {
      if (isHolding) {
        isHolding = false;
        track.style.cursor = 'grab';

        // Clear any pending timeout
        if (resumeTimeout) {
          clearTimeout(resumeTimeout);
          resumeTimeout = null;
        }

        // Resume immediately
        track.style.animationPlayState = 'running';

        const otherTrack = track.classList.contains('left')
          ? document.querySelector('.mt-track.right')
          : document.querySelector('.mt-track.left');
        if (otherTrack) {
          otherTrack.style.animationPlayState = 'running';
        }
      }
    });

    // Prevent text selection while holding
    track.addEventListener('selectstart', (e) => {
      if (isHolding) {
        e.preventDefault();
      }
    });
  });
}

function setupMobileTouchControls() {
  if (window.innerWidth > 768) return;

  mtTracks.forEach(track => {
    let isPressed = false;
    let startX;
    let scrollLeft;
    let resumeTimeout;

    track.style.animation = 'none';
    track.style.transform = 'none';
    track.style.animationPlayState = 'paused';
    track.style.overflowX = 'auto';
    track.style.cursor = 'grab';

    // Touch events
    track.addEventListener('touchstart', (e) => {
      isPressed = true;
      startX = e.touches[0].pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.cursor = 'grabbing';
    });

    track.addEventListener('touchmove', (e) => {
      if (!isPressed) return;
      e.preventDefault();
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
    });

    track.addEventListener('touchend', () => {
      isPressed = false;
      track.style.cursor = 'grab';
    });

    track.addEventListener('mousedown', (e) => {
      isPressed = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.cursor = 'grabbing';
      e.preventDefault();
    });

    track.addEventListener('mousemove', (e) => {
      if (!isPressed) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
    });

    track.addEventListener('mouseup', () => {
      isPressed = false;
      track.style.cursor = 'grab';
    });

    track.addEventListener('mouseleave', () => {
      isPressed = false;
      track.style.cursor = 'grab';
    });

    track.addEventListener('dragstart', (e) => {
      e.preventDefault();
    });
  });
}