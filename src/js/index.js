//Constants DOM
const GREEN_PAD = document.getElementById('green')
const RED_PAD = document.getElementById('red')
const YELLOW_PAD = document.getElementById('yellow')
const BLUE_PAD = document.getElementById('blue')
const PADS = [GREEN_PAD, RED_PAD, YELLOW_PAD, BLUE_PAD]

//Buttons Constants
const PLAY_BUTTON = document.getElementById('play')
const RESET_BUTTON = document.getElementById('reset')

//Color Constants
const LIGHT_RED = "rgb(255, 150, 150)"
const LIGHT_GREEN = "lightgreen"
const LIGHT_BLUE = "lightblue"
const LIGHT_YELLOW = "lightyellow"

//Time Constant
const TIME = 500

//Variables
let game_started = false
let random = 0

//EventListener
PLAY_BUTTON.addEventListener('click', playClick)
RESET_BUTTON.addEventListener('click', resetClick)
PADS.forEach((pad,index) =>{
    pad.addEventListener("mouseover", ()=>{
        if(index === 0){
            pad.style.backgroundColor = "darkgreen"
        }else if(index === 1){
            pad.style.backgroundColor = "darkred"
        }else if(index === 2){
            pad.style.backgroundColor = "rgb(195, 195, 0)"
        }else if(index === 3){
            pad.style.backgroundColor = "darkblue"
        }
    })

    pad.addEventListener("mouseleave", ()=>{
        if(index === 0){
            pad.style.backgroundColor = "green"
        }else if(index === 1){
            pad.style.backgroundColor = "red"
        }else if(index === 2){
            pad.style.backgroundColor = "yellow"
        }else if(index === 3){
            pad.style.backgroundColor = "blue"
        }
    })
})

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

    PADS.forEach((pad,index) =>{
        pad.addEventListener("click", ()=>{
            if((index+1) === random){
                alert("RIGHT!")
            }else{
                alert("WRONG")
            }
        })
    })

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
    

    RESET_BUTTON.style.backgroundColor = "black"
    RESET_BUTTON.style.color = "white"
    
}

function resetVisualChanges(){
    PLAY_BUTTON.style.color = "white"
    PLAY_BUTTON.style.backgroundColor = "black"
    

    RESET_BUTTON.style.backgroundColor = "rgba(0, 0, 0, 0.047)"
    RESET_BUTTON.style.color = "black"


    GREEN_PAD.style.backgroundColor = "var(--green)"
    RED_PAD.style.backgroundColor = "var(--red)"
    YELLOW_PAD.style.backgroundColor = "var(--yellow)"
    BLUE_PAD.style.backgroundColor = "var(--blue)"

}

function changePadColor(color){

    if(color == "green"){
        GREEN_PAD.style.backgroundColor = LIGHT_GREEN

        setTimeout(() =>{
            GREEN_PAD.style.backgroundColor = "green"
        }, TIME)

    }else if(color == "red"){
        RED_PAD.style.backgroundColor = LIGHT_RED

        setTimeout(() =>{
            RED_PAD.style.backgroundColor = "red"
        }, TIME)

    }else if(color == "yellow"){
        YELLOW_PAD.style.backgroundColor = LIGHT_YELLOW

        setTimeout(() =>{
            YELLOW_PAD.style.backgroundColor = "yellow"
        }, TIME)

    }else if(color == "blue"){
        BLUE_PAD.style.backgroundColor = "lightblue"

        setTimeout(() => {
            BLUE_PAD.style.backgroundColor = "blue"
        }, TIME)
    }


}
