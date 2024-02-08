// Menu open 
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close');
const menuList = document.querySelector('.menu-list');

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
}

//  =================================== //

// Slider

const sliderImages = document.querySelectorAll('.slider img');
const sliderIndicators = document.querySelectorAll('.slider-indicator');
const sliderLine = document.querySelector('.slider-line');

let currentIndex = 0;

function changeImage(index) {
  sliderImages[currentIndex].style.display = 'none';
  sliderIndicators[currentIndex].classList.remove('active');
  currentIndex = index;
  sliderImages[currentIndex].style.display = 'block';
  sliderIndicators[currentIndex].classList.add('active');

  const indicatorWidth = sliderIndicators[0].offsetWidth;
  sliderLine.style.left = `${currentIndex * indicatorWidth}px`;
}

sliderIndicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => changeImage(index));
});

window.addEventListener('DOMContentLoaded', () => {
  const indicatorWidth = sliderIndicators[0].offsetWidth;
  sliderLine.style.left = `${currentIndex * indicatorWidth}px`;
});

//  =================================== //


// Update time

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const currentTime = `${hours}:${minutes}:${seconds}`;
  const timeElement = document.querySelector('.time');
  timeElement.textContent = currentTime;
}


setInterval(updateTime, 1000);

updateTime();

//  =================================== //

// Close Apple Mac
const offerBtn = document.querySelector('.offer-btn');
const closeButton = document.querySelector('.close-mac');
const appleMac = document.querySelector('.apple-mac');

offerBtn.addEventListener('click', () => togglePopup(true));
closeButton.addEventListener('click', () => togglePopup(false));

function togglePopup(open) {
  appleMac.style.display = open ? 'block' : 'none';
}


//  =================================== //
// Dropdown
function toggleDropdown() {
  const dropdown = document.getElementById("myDropdown");
  const arrow = document.getElementById("arrow");

  if (dropdown && arrow) {
    dropdown.classList.toggle("show");
    arrow.classList.toggle("rotate180");
  }
}
//  =================================== //

// Toggle text
function toggleText(button) {
  const textFooter = button.parentNode.previousElementSibling;
  if (textFooter) {
    textFooter.style.maxHeight = textFooter.style.maxHeight ? null : textFooter.scrollHeight + "px";
    button.innerHTML = textFooter.style.maxHeight ? "Read more" : "Read less";
  }
}
