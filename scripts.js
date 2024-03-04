const ofertaFechaLimite = new Date("2024-01-21T18:55:00");

function actualizarTemporizador() {
  const ahora = new Date();
  const tiempoRestante = ofertaFechaLimite - ahora;

  if (tiempoRestante <= 0) {
    // Oculta el temporizador y muestra el título de oferta expirada
    document.getElementById("ofertaExpirada").style.display = "block";
    document.getElementById("temporizadorContainer").style.display = "none";
  } else {
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor(
      (tiempoRestante % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    // Actualiza los elementos del temporizador
    document.getElementById("numero_temporizador_dias").innerHTML = `${dias}`;
    document.getElementById("numero_temporizador_horas").innerHTML = `${horas}`;
    document.getElementById(
      "numero_temporizador_minutos"
    ).innerHTML = `${minutos}`;
    document.getElementById(
      "numero_temporizador_segundos"
    ).innerHTML = `${segundos}`;
  }
}

// Actualizar el temporizador cada segundo
setInterval(actualizarTemporizador, 1000);

document.addEventListener("DOMContentLoaded", function () {
  var menuHamburguesa = document.getElementById("id-icon-nav");
  var abrirMenu = document.getElementById("id-container-nav-r");
  var cerrarMenu = document.querySelector(".container-nav-r");
  var menu1 = document.querySelector("#menu1");
  var menu2 = document.querySelector("#menu2");

  menuHamburguesa.addEventListener("click", function () {
    abrirMenu.style.left = "0px";
    menu1.style.opacity = "0";
    menu2.style.opacity = "1";
  });

  cerrarMenu.addEventListener("click", function () {
    abrirMenu.style.left = "-600px";
    menu1.style.opacity = "1";
    menu2.style.opacity = "0";
  });

  // EFECTO SCROLL
  ScrollReveal().reveal(".aparece_en", {
    duration: 2000,
    origin: "bottom",
  });

  ScrollReveal().reveal(".parrafo", {
    duration: 2500,
    origin: "bottom",
    distance: "-50px",
  });

  ScrollReveal().reveal(".pregunta", {
    duration: 2000,
    origin: "right",
    distance: "-100px",
  });

  // Efecto acordeón para preguntas frecuentes
  const preguntas = document.querySelectorAll(".pregunta");

  preguntas.forEach(function (pregunta) {
    const botonVer = pregunta.querySelector(".ver_mas");
    const respuesta = pregunta.querySelector(".respuesta");

    botonVer.addEventListener("click", function () {
      respuesta.style.display =
        respuesta.style.display === "none" || respuesta.style.display === ""
          ? "block"
          : "none";
    });
  });

  // Scroll smooth para enlaces internos
  const scrollLinks = document.querySelectorAll(".scroll-link");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("data-scroll-target");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
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
    }, 20000); // Cambia de slide cada 20 segundos (20000 milisegundos)
  }

  // Agrega event listeners a los botones de "anterior" y "siguiente"
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Inicia automáticamente el cambio de slide cada 5 segundos
  startAutoSlide();
});
