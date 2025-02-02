$(document).ready(function () {
  $(".preloader").delay(1000).fadeOut(300);

  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      if (!$(this).attr("data-aos-delay")) {
        $(this).attr("data-aos-delay", (index + 1) * 100);
      }
    });
  });

  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });
});

// Menu toggle functionality
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const layer = document.querySelector(".layer");

navLinks.querySelectorAll("li").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    layer.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuButton.contains(e.target)) {
    navLinks.classList.remove("active");
    layer.classList.remove("active");
  }
});

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  layer.classList.toggle("active");
});

// hero slider
var mainSlider = new Swiper(".hero_swiper", {
  spaceBetween: 0,
  loop: true,
  effect: "fade",
  speed: 500,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
});

// nav bar fixed up
let header = document.querySelector("header");
let main = document.querySelector("main");

window.addEventListener("scroll", () => {
  console.log();

  if (this.scrollY > 118) {
    header.classList.add("sticky");
    main.classList.add("main_fixed");
  } else {
    header.classList.remove("sticky");
    main.classList.remove("main_fixed");
  }
});

const servicesSlider = new Swiper(".projects_swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".service-button-next",
    prevEl: ".service-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    350: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

const blogs = new Swiper(".blogs_slider", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    350: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

var partnersSlider = new Swiper(".partnersSlider", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 12,
  speed: 1000,
  pagination: {
    el: ".partnersPagination",
    clickable: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
});

const skills = new Swiper(".skills_slider", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: 7,
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 7,
    },
    768: {
      slidesPerView: 4,
    },
    350: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
