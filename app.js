const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('.statusText');
const restartBtn = document.querySelector('.restartBtn');
let currentPlayer = "X"
let gameActive = true;


function cellClick(e){
    const cell = e.target
    if(!gameActive || cell.textContent !== ""){
        return;
    }
    cell.textContent = currentPlayer;
    checkWinner();
    if(gameActive){
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Đến lượt người chơi ${currentPlayer}`;
    }
}
function checkWinner(){
    let conditionsWin = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]          
    ];
    for(let i = 0; i < conditionsWin.length; i++){
        const [a, b, c] = conditionsWin[i]
        if(cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent){
            gameActive = false;
            statusText.textContent = `Người chơi ${currentPlayer} thắng!`
        }
    }
}
function restartClick(){
    for(let i = 0 ; i < cells.length; i++){
        cells[i].textContent = ""
        statusText.textContent = ""
        currentPlayer = "X"
        gameActive = true;

    }
}


for(let i = 0; i< cells.length; i ++){
    const cell = cells[i]
    cell.addEventListener("click",cellClick)
}
restartBtn.addEventListener("click",restartClick)