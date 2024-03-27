const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const video = document.querySelector(".video-container")


play.addEventListener("click", function (){
       video.play();
              
}

);

pause.addEventListener("click",function (){
    video.pause();
})

