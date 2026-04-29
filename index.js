
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

/* Show slide */
function showSlidemanual(i) {
  
    let activePage = document.querySelector(".page.active");
    
  
    let pageRooms = activePage.querySelectorAll(".room");
  
  

    if (pageRooms.length == 0) return;

    if (i >= pageRooms.length) {
        index = 0;
    } else if (i < 0) {
        index = pageRooms.length - 1;
    } else {
        index = i;
    }

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



function showroom(id){
  let pages=document.querySelectorAll(".page");
  pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
    
    // Reset the slider to the first image when switching pages
    showSlidemanual(0);
}


var scrolltotop=document.getElementById("scrollbtn");
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

scrolltotop.addEventListener("click",scrolltoTop);




// document.getElementById("registerForm")?.addEventListener("submit", function(e){
//     e.preventDefault();

//     let name = document.querySelector("input[placeholder='First Name']").value;
//     let email = document.querySelector("input[type='email']").value;
//     let password = document.querySelector("input[type='password']").value;
//     let gender = document.querySelector('input[name="gender"]:checked')?.value;
//     let mobile=document.querySelector("input[placeholder='Phone Number']").value;

//  let isValid = true;

//     let named = document.getElementById("name");
//     let emaild = document.getElementById("email");
//     let passwordd= document.getElementById("password");

//     let nameError = document.getElementById("nameError");
//     let emailError = document.getElementById("emailError");
//     let passwordError = document.getElementById("passwordError");

   
//     nameError.textContent = "";
//     emailError.textContent = "";
//     passwordError.textContent = "";

//     named.classList.remove("error-border");
//     emaild.classList.remove("error-border");
//     passwordd.classList.remove("error-border");

   
//     if(named.value.trim() === ""){
//         nameError.textContent = "Name is required";
//         named.classList.add("error-border");
//         isValid = false;
//     }

  
//     if(emaild.value.trim() === ""){
//         emailError.textContent = "Email is required";
//         emaild.classList.add("error-border");
//         isValid = false;
//     }

   
//     if(passwordd.value.length < 4){
//         passwordError.textContent = "Password must be at least 4 characters";
//         passwordd.classList.add("error-border");
//         isValid = false;
//     }

//     if(isValid){
//         alert("Form Submitted Successfully!");
//     }
    

//     let user = {
//         name:name,
//         email:email,
//         password:password,

//         gender:gender
//     };

//     localStorage.setItem("user", JSON.stringify(user));

//     alert("Registered Successfully!");
//     window.location.href = "login.html";
// });










// document.getElementById("registerForm")?.addEventListener("submit", function(e){
//     e.preventDefault();

//     let isValid = true;

//    let name = document.getElementById("name");
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");
//     let phone = document.getElementById("phone");
//     let gender = document.querySelector('input[name="gender"]:checked');

//  let nameError = document.getElementById("nameError");
//     let emailError = document.getElementById("emailError");
//     let passwordError = document.getElementById("passwordError");
//     let phoneError = document.getElementById("phoneError");
//     let genderError = document.getElementById("genderError");

//     // RESET
//    nameError.textContent = "";
//     emailError.textContent = "";
//     passwordError.textContent = "";
//     phoneError.textContent = "";
//     genderError.textContent = "";

//     name.classList.remove("error-border");
//     email.classList.remove("error-border");
//     password.classList.remove("error-border");

//     // NAME
//     if(name.value.trim() === ""){
//         nameError.textContent = "Name is required";
//         // name.classList.add("error-border");
//         isValid = false;
//     }

//     // EMAIL
//     if(email.value.trim() === ""){
//         emailError.textContent = "Email is required";
//         // email.classList.add("error-border");
//         isValid = false;
//     }

//     // PASSWORD
//     if(password.value.length < 4){
//         passwordError.textContent = "Password must be at least 4 characters";
//         // password.classList.add("error-border");
//         isValid = false;
//     }

//     // PHONE ✅
//     if(phone.value.trim() === ""){
//         phoneError.textContent = "Phone number is required";
//         isValid = false;
//     }

//     // GENDER ✅
//    if(!gender){
//     genderError.textContent = "Please select gender";
//     isValid = false;
// }

//     // 🔥 IMPORTANT: STOP if invalid
//     if(!isValid) return;

//     // SAVE USER
//     let user = {
//         name: name.value,
//         email: email.value,
//         password: password.value,
//         mobile: mobile.value,
//         gender: gender.value
//     };

//     localStorage.setItem("user", JSON.stringify(user));

//     alert("Registered Successfully!");
//     window.location.href = "login.html";
// });










// document.getElementById("registerForm").addEventListener("submit", function(e){
//     e.preventDefault();

//     let isValid = true;

//     let name = document.getElementById("name");
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");
//     let phone = document.getElementById("phone");
//     let gender = document.querySelector('input[name="gender"]:checked');

//     let nameError = document.getElementById("nameError");
//     let emailError = document.getElementById("emailError");
//     let passwordError = document.getElementById("passwordError");
//     let phoneError = document.getElementById("phoneError");
//     let genderError = document.getElementById("genderError");

//     // RESET
//     nameError.textContent = "";
//     emailError.textContent = "";
//     passwordError.textContent = "";
//     phoneError.textContent = "";
//     genderError.textContent = "";

//     // NAME
//     if(name.value.trim() === ""){
//         nameError.textContent = "Name is required";
//         isValid = false;
//     }

//     // EMAIL
//     if(email.value.trim() === ""){
//         emailError.textContent = "Email is required";
//         isValid = false;
//     }

//     // PASSWORD
//     if(password.value.length < 4){
//         passwordError.textContent = "Min 4 characters";
//         isValid = false;
//     }

//     // PHONE
//     if(phone.value.trim() === ""){
//         phoneError.textContent = "Phone required";
//         isValid = false;
//     }

//     // GENDER
//     if(!gender){
//         genderError.textContent = "Select gender";
//         isValid = false;
//     }

//     if(!isValid) return;
    
//     let user = {
//       name: name.value,
//       email: email.value,
//       password: password.value,
//       phone: phone.value,
//       gender: gender.value
//     };

//     localStorage.setItem("user", JSON.stringify(user));

//     alert("Registered Successfully!");
//     window.location.href = "login.html";
// });











// document.getElementById("logincard").addEventListener("submit", function(e){
//     e.preventDefault();

//     let email = document.getElementById("email").value;
//     let password = document.getElementById("passowrd").value;

//     let savedUser = JSON.parse(localStorage.getItem("user"));

//     if(!savedUser){
//         alert("No user found! Please register first.");
//         return;
//     }

//     if(email === savedUser.email && password === savedUser.password){
//         alert("Login Successful!");

//         // ✅ mark user as logged in
//         localStorage.setItem("isLoggedIn", "true");

//         window.location.href = "index.html";
//     } else {
//         alert("Invalid email or password");
//     }
// });






window.addEventListener("load", () => {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let user = JSON.parse(localStorage.getItem("user"));
    let navbarm=document.querySelector(".navbarm")
    let loginDiv = document.querySelector(".nv-login");
    let loginDivm=navbarm.querySelector(".nv-login");
    if (isLoggedIn==="true" && user){
        loginDivm.innerHTML = `
            <span style="color: gold;">👤</span>
            <button onclick="logout()" style="margin-left:10px;">Logout</button>
        `;
    }

    if(isLoggedIn === "true" && user){
        loginDiv.innerHTML = `
            <span style="color: gold;">👤 ${user.name}</span>
            <button onclick="logout()" style="margin-left:10px;">Logout</button>
        `;
    }
});

// window.addEventListener("DOMContentLoaded", () => {

//     let isLoggedIn = localStorage.getItem("isLoggedIn");
//     let user = JSON.parse(localStorage.getItem("user"));

//     let loginDivs = document.querySelectorAll(".nv-login");

//     loginDivs.forEach(div => {

//         if(isLoggedIn === "true" && user){
//             div.innerHTML = `
//                 <span class="user-name">👤 ${user.name}</span>
//                 <button class="logout-btn" onclick="logout()">Logout</button>
//             `;
//         } else {
//             div.innerHTML = `<a href="login.html">Sign in</a>`;
//         }

//     });
// });


function logout(){
    localStorage.removeItem("isLoggedIn");
    alert("Logged out!");
    window.location.reload();
}