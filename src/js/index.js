//Constants DOM
const GREEN_PAD = document.getElementById('green')
const RED_PAD = document.getElementById('red')
const YELLOW_PAD = document.getElementById('yellow')
const BLUE_PAD = document.getElementById('blue')

const PADS = Array.from(document.getElementsByClassName('pad'))

const PLAY_BUTTON = document.getElementById('play')
const RESET_BUTTON = document.getElementById('reset')


//Color Constants
const LIGHT_RED = "rgb(255, 150, 150)"
const LIGHT_GREEN = "lightgreen"
const LIGHT_BLUE = "lightblue"
const LIGHT_YELLOW = "lightyellow"

//Variables
let game_started = false
let random = 0

//EventListener
PLAY_BUTTON.addEventListener('click', playClick)
RESET_BUTTON.addEventListener('click', resetClick)

//Functions
function playClick(){

    PLAY_BUTTON.removeEventListener('click', playClick)

    game_started = true
    
    startVisualChanges()

    random = Math.floor(Math.random() * 4 + 1)

    if(random == 1){
        changePadColor("green")
    }else if(random == 2){
        changePadColor("red")
    }else if(random == 3){
        changePadColor("yellow")
    }else if(random == 4){
        changePadColor("blue")
    }
}


function resetClick(){
    if(game_started == false){
        alert("Hey, you have to click in the PLAY! button first.")
    }else{
        PLAY_BUTTON.addEventListener('click', playClick)

        game_started = false

        resetVisualChanges()
    }
}

function startVisualChanges(){
    PLAY_BUTTON.style.color = "black"
    PLAY_BUTTON.style.backgroundColor = "rgba(0, 0, 0, 0.047)"
    PLAY_BUTTON.classList.remove('hover')

    RESET_BUTTON.style.backgroundColor = "black"
    RESET_BUTTON.style.color = "white"
    RESET_BUTTON.classList.add('hover')
}

function resetVisualChanges(){
    PLAY_BUTTON.style.color = "white"
    PLAY_BUTTON.style.backgroundColor = "black"
    PLAY_BUTTON.classList.add('hover')

    RESET_BUTTON.style.backgroundColor = "rgba(0, 0, 0, 0.047)"
    RESET_BUTTON.style.color = "black"
    RESET_BUTTON.classList.remove('hover')

    GREEN_PAD.style.backgroundColor = "green"
    RED_PAD.style.backgroundColor = "red"
    YELLOW_PAD.style.backgroundColor = "yellow"
    BLUE_PAD.style.backgroundColor = "blue"
}

function changePadColor(color){

    if(color == "green"){
        GREEN_PAD.style.backgroundColor = LIGHT_GREEN

        setTimeout(() =>{
            GREEN_PAD.style.backgroundColor = "green"
        }, 1000)

    }else if(color == "red"){
        RED_PAD.style.backgroundColor = LIGHT_RED

        setTimeout(() =>{
            RED_PAD.style.backgroundColor = "red"
        }, 1000)

    }else if(color == "yellow"){
        YELLOW_PAD.style.backgroundColor = LIGHT_YELLOW

        setTimeout(() =>{
            YELLOW_PAD.style.backgroundColor = "yellow"
        }, 1000)

    }else if(color == "blue"){
        BLUE_PAD.style.backgroundColor = "lightblue"

        setTimeout(() => {
            BLUE_PAD.style.backgroundColor = "blue"
        }, 1000)
    }


}
