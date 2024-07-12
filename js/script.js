let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

if (menu !== null) {
  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };
}

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  if (menu !== null) {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
  }

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        if (document.querySelector(`header .navbar a[href*="${id}"]`)) {
          document
            .querySelector(`header .navbar a[href*="${id}"]`)
            .classList.add("active");
        }
      });
    }
  });
};

let searchIcon = document.querySelector("#search-icon");
let searchForm = document.querySelector("#search-form");
let closeSearchForm = document.querySelector("#close");

if (searchIcon !== null) {
  searchIcon.onclick = () => {
    searchForm.classList.toggle("active");
  };
}

if (closeSearchForm !== null) {
  closeSearchForm.onclick = () => {
    searchForm.classList.remove("active");
  };
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
//
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 1200);
}
window.onload = fadeOut;
