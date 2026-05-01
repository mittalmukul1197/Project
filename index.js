
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



let index = 0;
function showSlidemanual(i) {
    let activePage = document.querySelector(".page.active");
    let pageRooms = activePage.querySelectorAll(".room");

    if (pageRooms.length == 0) return;

    if (i >= pageRooms.length) index = 0;
    else if (i < 0) index = pageRooms.length - 1;
    else index = i;

    pageRooms.forEach(slide => slide.classList.remove("active"));
    pageRooms[index].classList.add("active");
}

let nextBtns = document.querySelectorAll(".next");
nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        showSlidemanual(index + 1);
    });
});

let prevBtns = document.querySelectorAll(".prev");
prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        showSlidemanual(index - 1);
    });
});


function showroom(id) {
    let pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
    showSlidemanual(0);
}


//=======SCROLL BUTTON==================
var scrolltotop = document.getElementById("scrollbtn");
window.onscroll = function () {
    if (window.scrollY > 300) {
        scrolltotop.style.display = "block";
    } else {

        scrolltotop.style.display = "none";
    }
};
function scrolltoTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
scrolltotop.addEventListener("click", scrolltoTop);

//============================================


//==============LOGGEDIN STATUS==================
window.addEventListener("load", () => {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let user = JSON.parse(localStorage.getItem("user"));
    let navbarm = document.querySelector(".navbarm")
    let loginDiv = document.querySelector(".nv-login");
    let loginDivm = navbarm.querySelector(".nv-login");


    if (isLoggedIn === "true" && user) {
        loginDiv.classList.add("loggedin");
        loginDivm.innerHTML = `
            <span style="color: gold;">${user.name[0].toUpperCase()}</span>
            <button onclick="logout()" style="margin-left:10px;">Logout</button>
        `;

    }

    if (isLoggedIn === "true" && user) {
        loginDiv.classList.add("loggedin");
        loginDiv.innerHTML = `
            <span class="usericon">${user.name[0].toUpperCase()}</span>
            <div class="logindropdown" > 
                   <a href="events.html">Restaurant</a>
                   <a href="gallery.html">Gallery</a>
                   <a href="dining.html">Dining</a>
                   <a href="about.html">About Us</a>
            <div>
            <button onclick="logout()" style="margin-left:10px;">Logout</button>
            `;
    }
});
//===============================================================


//======================LOGOUT BUTTON==================
function logout() {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out!");
    window.location.reload();
}
//========================================================



//=================CUSTOMEALERT============
function customealert(message, options = {}) {
    const { timeout = false, button = true, time = 3000 } = options;

    const box = document.createElement("div");
    box.className = "customealertbox";

    const text = document.createElement("p");
    text.innerText = message;

    box.appendChild(text);


    if (button) {
        const btn = document.createElement("button");
        btn.innerText = "OK";

        btn.onclick = () => box.remove();
        box.appendChild(btn);
    }

    document.body.appendChild(box);


    if (timeout) {
        setTimeout(() => {
            box.remove();

        }, time);
    }
}
//===========================================
