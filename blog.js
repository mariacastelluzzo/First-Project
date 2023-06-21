const sliders = document.querySelectorAll('.slider'); 
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = sliders.length - 1;
  } else if (index >= sliders.length) {
    currentIndex = 0;
  }

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = 'none';
  }
  sliders[currentIndex].style.display = 'block';
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

showSlide(currentIndex);

setInterval(nextSlide, 10000); // Automatic slide change every 10 seconds

