//Constants
const playBtn = $("#play");
const pads = $(".pad");
//Variables
let lvlCount = 1;
let randomArray = [];
let clickArray = [];

//Main
playBtn.on("click", initialize);

function initialize(){
    playBtn.off("click");
    $("#lvl-count").html(lvlCount);
    randomizePad();
}

function randomizePad(){
    let randomNum = Math.floor(Math.random()*4);
    randomArray.push(randomNum);

    animatePad(randomNum);
}

function playSound(num){
    let audio = new Audio("../audio/tone-" + num + ".wav");

    audio.play();
}
function animatePad(randomNum) {
    pads.eq(randomNum).animate({ opacity: 0.5 }, "fast");
    playSound(randomNum);
    setTimeout(() => {
        pads.eq(randomNum).animate({ opacity: 1 }, "fast");
    }, "300");
}