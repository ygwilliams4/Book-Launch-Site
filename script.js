var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", myFunction);

function myFunction() {
    if (hamburger.classList.contains("active") == false ) {
        hamburger.classList.add("active");
    } else {
        hamburger.classList.remove("active");
    }
};