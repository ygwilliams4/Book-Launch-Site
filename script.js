var hamburger = document.querySelector(".hamburger");
var navList = document.querySelector(".nav-list");
var navLink = document.querySelectorAll(".nav-link");
console.log(navLink);
hamburger.addEventListener("click", myFunction);


function myFunction() {
    if (navList.classList.contains("active") == false && hamburger.classList.contains("active") == false) {
        navList.classList.toggle("active");
        hamburger.classList.toggle("active");
    }
    else {
        navList.classList.remove("active");
        hamburger.classList.remove("active");
    }
}