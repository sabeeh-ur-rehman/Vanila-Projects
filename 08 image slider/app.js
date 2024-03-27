const previous = document.querySelector(".previous");
const next = document.querySelector(".btn");


const image = document.querySelector(".img-2");


previous.addEventListener("click", function () {
    image.classList.remove("show-img2");
 });



next.addEventListener("click", function () {  
     image.classList.add("show-img2");
  });



