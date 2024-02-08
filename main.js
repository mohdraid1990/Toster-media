// Menu open 

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close');
const menuList = document.querySelector('.menu-list');

menuIcon.addEventListener('click', function() {
  menuList.style.display = 'block';
});

closeIcon.addEventListener('click', function() {
  menuList.style.display = 'none';
});


// =======================================//



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



const offerBtn = document.querySelector('.offer-btn');
const closeButton = document.querySelector('.close-mac');
const appleMac = document.querySelector('.apple-mac');

offerBtn.addEventListener('click', function() {
  appleMac.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  appleMac.style.display = 'none';
});




function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  var arrow = document.getElementById("arrow");
  
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
    arrow.classList.remove("rotate180");
  } else {
    dropdown.classList.add("show");
    arrow.classList.add("rotate180");
  }
}




// ///////////////////////////////////////////
function toggleText(button) {
  var textFooter = button.parentNode.previousElementSibling;
  var btnText = button.innerHTML;

  if (textFooter.style.maxHeight) {
    textFooter.style.maxHeight = null;
    button.innerHTML = "Read more";
  } else {
    textFooter.style.maxHeight = textFooter.scrollHeight + "px";
    button.innerHTML = "Read less";
  }
}