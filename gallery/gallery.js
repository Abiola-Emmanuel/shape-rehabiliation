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

const sm1 = document.getElementById('sm1')
const seeMoreBtn1 = document.getElementById('seeMoreBtn1')

function seeMore() {

  if (sm1.style.display === "flex") {
    sm1.style.display = "none";
    seeMoreBtn1.textContent = "See More";
  } else {
    sm1.style.display = "flex";
    seeMoreBtn1.textContent = "See Less";
  }

}

const visitItems = document.querySelectorAll(".visit-sm");
const seeMoreBtn2 = document.getElementById("seeMoreBtn2");

function seeMore2() {
  if (visitItems[0].style.display === "flex") {
    visitItems.forEach(item => {
      item.style.display = "none";
    });
    seeMoreBtn2.textContent = "See More";
  } else {
    visitItems.forEach(item => {
      item.style.display = "flex";
    });
    seeMoreBtn2.textContent = "See Less";
  }
}

const staffItems = document.querySelectorAll(".staff-sm");
const seeMoreBtn3 = document.getElementById("seeMoreBtn3");

function seeMore3() {
  if (staffItems[0].style.display === "flex") {
    staffItems.forEach(item => {
      item.style.display = "none";
    });
    seeMoreBtn3.textContent = "See More";
  } else {
    staffItems.forEach(item => {
      item.style.display = "flex";
    });
    seeMoreBtn3.textContent = "See Less";
  }
}

const awardItem = document.querySelectorAll('.aw-sm');
const seeMoreBtn4 = document.getElementById("seeMoreBtn4");


function seeMore4() {
  if (awardItem[0].style.display === "flex") {
    awardItem.forEach(item => {
      item.style.display = "none";
    });
    seeMoreBtn4.textContent = "See More";
  } else {
    awardItem.forEach(item => {
      item.style.display = "flex";
    });
    seeMoreBtn4.textContent = "See Less";
  }
}

