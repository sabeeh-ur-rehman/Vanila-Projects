// initial value 
var count = 0;
// select value and buttons 
var value = document.querySelector("#value");
var btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        var styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        ;
        value.textContent = count;
    });
});
