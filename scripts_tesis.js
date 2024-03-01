document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
  
    function showSlide(index) {
      carousel.style.transform = `translateX(${-index * 100}%)`;
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
      showSlide(currentIndex);
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carousel.children.length;
      showSlide(currentIndex);
    }
  
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
  });
  