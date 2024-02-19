//Constants DOM
const GREEN_PAD = document.getElementById('green')
const RED_PAD = document.getElementById('red')
const YELLOW_PAD = document.getElementById('yellow')
const BLUE_PAD = document.getElementById('blue')

const PLAY_BUTTON = document.getElementById('play')
const RESET_BUTTON = document.getElementById('reset')


//Color Constants
const LIGHT_RED = "rgb(255, 150, 150)"

//Variables
let game_started = false

//EventListener
PLAY_BUTTON.addEventListener('click', playClick)
RESET_BUTTON.addEventListener('click', resetClick)

//Functions
function playClick(){
    
    game_started = true
    
    startVisualChanges()

}


function resetClick(){
    if(game_started == false){
        alert("Hey, you have to click in the PLAY! button first.")
    }else{
        game_started = false
        resetVisualChanges()
    }
}

function startVisualChanges(){
    PLAY_BUTTON.removeEventListener('click', playClick)
    PLAY_BUTTON.style.color = "black"
    PLAY_BUTTON.style.backgroundColor = "rgba(0, 0, 0, 0.047)"
    PLAY_BUTTON.classList.remove('hover')

    RESET_BUTTON.style.backgroundColor = "black"
    RESET_BUTTON.style.color = "white"
    RESET_BUTTON.classList.add('hover')
}

function resetVisualChanges(){
    PLAY_BUTTON.addEventListener('click', playClick)
    PLAY_BUTTON.style.color = "white"
    PLAY_BUTTON.style.backgroundColor = "black"
    PLAY_BUTTON.classList.add('hover')

    RESET_BUTTON.style.backgroundColor = "rgba(0, 0, 0, 0.047)"
    RESET_BUTTON.style.color = "black"
    RESET_BUTTON.classList.remove('hover')
}