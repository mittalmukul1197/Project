
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}


function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});



function toggleDarkLight() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});




let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    // slides.forEach(slide => slide.classList.remove("active-slide"));
    // slides[index].classList.add("active-slide");

    slides.forEach(slide => {
        slide.classList.remove("active-slide");
    });

    slides[index].classList.add("active-slide");
}

setInterval(() => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}, 2000);