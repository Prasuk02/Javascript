let currentTurn = 'X'
let boxes = document.getElementsByClassName('box')
let boxArray = Array.from(boxes)
let winnerAnnouncement = document.getElementById('winnerAnnouncement')
let isGameOver = false

function nextTurn(){
    if(currentTurn === "X"){
        return "0"
    }
    return "X"
}

function checkForWin(){
    let winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    winConditions.forEach((condition) => {
        if((boxArray[condition[0]].innerHTML === boxArray[condition[1]].innerHTML) && (boxArray[condition[1]].innerHTML === boxArray[condition[2]].innerHTML) && (boxArray[condition[0]].innerHTML !== '')){
            winnerAnnouncement.innerHTML = `PLAYER ${currentTurn} WON!! <br/>CLICK RESET BTN TO PLAY AGAIN`
            isGameOver = true;
            boxArray[condition[0]].style.color = 'rgb(24, 103, 167)'
            boxArray[condition[1]].style.color = 'rgb(24, 103, 167)'
            boxArray[condition[2]].style.color = 'rgb(24, 103, 167)'
        }   
    })
}

boxArray.forEach((element) => {
    element.addEventListener('click', () => {
        if(element.innerHTML == '' && !isGameOver){
            element.innerHTML = currentTurn;
            checkForWin()
            currentTurn = nextTurn()
            document.getElementById('turn').innerHTML = currentTurn
        }
    })
})

let resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', () => {
    boxArray.forEach((box) => {
        box.innerHTML = ''; 
        box.style.color = "#dc3545"
    })
    currentTurn = 'X'
    document.getElementById('turn').innerText = currentTurn;
    isGameOver = false;
    winnerAnnouncement.innerText = ''
})
