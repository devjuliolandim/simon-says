//Constants
const playBtn = $("#play");
const pads = $(".pad");
//Variables
let lvlCount = 0;
let randomArray = [];
let clickArray = [];

//Main
playBtn.on("click", initialize);

function initialize(){
    playBtn.off("click");
    lvlCount++;
    $("#lvl-count").html(lvlCount);
    randomizePad();
    pads.on("click", verifyClick);
    pads.addClass("clickable");
}

function randomizePad(){
    let randomNum = Math.floor(Math.random()*4);
    randomArray.push(randomNum);
    animatePad(randomNum);
}

function animatePad(randomNum) {

    pads.eq(randomNum).animate({ opacity: 0.5 }, "fast");
    setTimeout(() => {
        pads.eq(randomNum).animate({ opacity: 1 }, "fast");
    }, "300");

    
}

function verifyClick(){

    var index = $(".pad").index(this)

    clickArray.push(index);
  
    if(randomArray[clickArray.length-1] === index){
        if(clickArray.length === randomArray.length){
            setTimeout(nextLevel, 500);
        }
    }else{
        wrong()
    }
}

function nextLevel(){
    clickArray = [];
    lvlCount++;
    $("#lvl-count").html(lvlCount);
    randomizePad();
}

function wrong(){
    var body = $("body");

    body.addClass("wrong");

    setTimeout(()=>{
        body.removeClass("wrong");
    }, 200);

    lvlCount = 0;
    $("#lvl-count").html(lvlCount);
    clickArray = [];
    randomArray = [];
    pads.off("click");



    playBtn.on("click", initialize);
}