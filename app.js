 const cells = document.querySelectorAll('.cell')
 const statusText = document.querySelector('.statusText')
 const restartBtn = document.querySelector('.restartBtn')


let playerX = 'X'
let playerO = "O"
let conditionsWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let xTurn = true;
let count = 0;

cells.forEach((e)=>{
    e.addEventListener('click',()=>{
        if(!e.textContent){
            if(xTurn){
                e.innerText = "X";
            }else{
                e.innerText = "0";
            }
        }
        xTurn =!xTurn;
        e.disabled = true;
    })
    
})
