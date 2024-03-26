// initial value 

let count:number = 0;

// select value and buttons 

const value:any = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e:any){
        const styles = e.currentTarget.classList;

        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")){
            count++;
        }
        else {
            count = 0;
        };
        value.textContent = count
        console.log("thatsit")
        
     })
})
     

