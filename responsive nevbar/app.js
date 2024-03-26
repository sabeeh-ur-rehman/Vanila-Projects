const navToggle = document.querySelector(".nav-toggle");
const Links = document.querySelector(".links");


navToggle.addEventListener("click", function(){

    Links.classList.toggle("show-links");
});