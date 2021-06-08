var counter = document.querySelector(".counter");
var follower = document.querySelector(".followers");

let count = 1;
function timer() {setInterval( () => {
    if(count<1000){
        count++;
        counter.innerText = count;
    }
}, 1)

setTimeout( () => {
    follower.innerText = "Follower on Instagram";
}, 5500)}

window.addEventListener("load", timer);