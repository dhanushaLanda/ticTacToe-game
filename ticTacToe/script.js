let cells = document.getElementsByClassName("tile");
let player1 = {
    symbol:"X",
    moves: []
};
let player2 = {
    symbol:"O",
    moves: []
};
let currentPlayer = player1;
let winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]];

function handlePlayerMove(target) {
    let id = parseInt(target.getAttribute('id'));
    target.innerHTML = currentPlayer.symbol;
    currentPlayer.moves.push(id);
}

function updatePlayer(){
    if (currentPlayer.symbol == player1.symbol) {
        currentPlayer = player2;
    }else{
        currentPlayer = player1;
    }
}

function validateMoves(){
    let moves = currentPlayer.moves;
    let hasWon;
    for(let i=0; i <winningConditions.length; i++){
        hasWon = moves.includes(winningConditions[i][0]) && moves.includes(winningConditions[i][1]) && moves.includes(winningConditions[i][2]);
        if(hasWon){
            let status = document.getElementsByClassName("game-status")[0];
            console.log(status);
            status.innerHTML = currentPlayer.symbol + " won!!!!!";
            return;
        }
    }
}
for(let i=0;i<cells.length; i++){
    cells[i].addEventListener("click", function (event){
        handlePlayerMove(event.target);
        validateMoves();
        updatePlayer();
    })
}
