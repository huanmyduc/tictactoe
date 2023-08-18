 const cells = document.querySelectorAll('.cell')
 const statusText = document.querySelector('.statusText')
 const restartBtn = document.querySelector('.restartBtn')


let xTurn = true;
let count = 0;
isGameOver = false;
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
function checkWin(){
    for(let i = 0; i < conditionsWin.length; i++){
        let cell1 = cells[conditionsWin[i][0]].innerHTML;
        let cell2 = cells[conditionsWin[i][1]].innerHTML
        let cell3 = cells[conditionsWin[i][2]].innerHTML
        
        if(cell1 != "" && cell1 === cell2 && cell1 == cell3){
            isGameOver = true;
        
        }
    } 
}
checkWin()
