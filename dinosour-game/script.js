const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const timer = document.getElementById("timer");


document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    dino.classList.add("jump");
    setTimeout(() => dino.classList.remove("jump"), 300);
}
let myTime = 0;

let isAlive = setInterval( function() {
    let = dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let = cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    var time = Math.random(50);
    cactus.style.setProperty('--animation-time', time+"s" )
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        myTime = 0;
    }
}, 10);



let timerCount = setInterval( function() {
    timer.innerHTML = `<h1>${myTime}</h1>`;
    myTime+=1;
 },1000);