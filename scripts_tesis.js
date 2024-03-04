document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;

  function showSlide(index) {
    carousel.style.transform = `translateX(${-index * 100}%)`;
  }

  function prevSlide() {
    currentIndex =
      (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    showSlide(currentIndex);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    setInterval(function () {
      nextSlide();
    }, 10000); // Cambia de slide cada 5 segundos (5000 milisegundos)
  }

  // Agrega event listeners a los botones de "anterior" y "siguiente"
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Inicia automáticamente el cambio de slide cada 5 segundos
  startAutoSlide();
});

document.addEventListener("DOMContentLoaded", function () {
  const attentionButton = document.getElementById("attentionButton");

  function playBounceAnimation() {
    attentionButton.classList.add("bounce-animation");
  }

  function startAutomaticAnimation() {
    setInterval(function () {
      attentionButton.classList.remove("bounce-animation");
      void attentionButton.offsetWidth; // Triggers reflow to restart the animation
      playBounceAnimation();
    }, 5000); // Cambia la animación cada 3 segundos
  }

  // Inicia la animación automáticamente después de un breve retraso (por ejemplo, 1 segundo)
  setTimeout(startAutomaticAnimation, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const attentionButton = document.getElementById("attentionButton_2");

  function playBounceAnimation() {
    attentionButton.classList.add("bounce-animation");
  }

  function startAutomaticAnimation() {
    setInterval(function () {
      attentionButton.classList.remove("bounce-animation");
      void attentionButton.offsetWidth; // Triggers reflow to restart the animation
      playBounceAnimation();
    }, 5000); // Cambia la animación cada 3 segundos
  }

  // Inicia la animación automáticamente después de un breve retraso (por ejemplo, 1 segundo)
  setTimeout(startAutomaticAnimation, 1000);
});

// EFECTO SCROLL
ScrollReveal().reveal("h4", {
  duration: 4000,
  origin: "bottom",
});
ScrollReveal().reveal("h3", {
  duration: 2500,
  origin: "bottom",
  distance: "-50px",
});

ScrollReveal().reveal("p", {
  duration: 2000,
  origin: "right",
  distance: "-100px",
});
