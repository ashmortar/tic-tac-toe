//LOOSE HELPER FUNCTIONS--------------
function isOdd(num){
  if (num % 2 === 0 && num > 0){
    return false
  } else {
    return true
  }
}

function addDiag(num){
  var sum = [];
  sum.push(game.board.rowA[num] + game.board.rowB[num + 1] + game.board.rowC[num + 2]);
  sum.push(game.board.rowA[num + 2] + game.board.rowB[num + 1] + game.board.rowC[num]);
  return sum;
}

function checkDraw(){
  if (game.turn > Math.pow(board.length, 2)) {
    alert("draw");
  }
}

//OBJECT DEFINITIONS------------------
function Player(name) {
  this.name = name;
  this.piece = 0;
}

function Board() {
  this.rowA = [0, 0, 0];
  this.rowB = [0, 0, 0];
  this.rowC = [0, 0, 0];
  // console.log(this.rowA);
}

function Game(name1, name2) {
  this.player1 = new Player(name1);
  this.player2 = new Player(name2);
  this.board = new Board();

  this.turn = 1;
}

Game.prototype.move = function(xPos, yPos){
  if ((this.board[xPos])[yPos] != 0){
    console.log("taken");
  } else if (isOdd(game.turn)) {
    (this.board[xPos])[yPos] = 1;
    console.log(this.board.rowA);
    console.log(this.board.rowB);
    console.log(this.board.rowC);
    this.turn++;
    game.checkWin();
  } else if (isOdd(game.turn) === false) {
    (this.board[xPos])[yPos] = -1;
    console.log(this.board.rowA);
    console.log(this.board.rowB);
    console.log(this.board.rowC);
    this.turn++;
    game.checkWin();
  } else {
    console.log("AUTOPIG IS DISPLEASED");
  }
}

Game.prototype.checkWin = function() {
  var boardState = [this.board.rowA, this.board.rowB, this.board.rowC];
  for (var i = 0;i<boardState.length;i++){
    var row = boardState[i];
    var col = [this.board.rowA[i], this.board.rowB[i], this.board.rowC[i]];

    if (row[0]+row[1]+row[2] === 3 || row[0]+row[1]+row[2] === -3){
      console.log("you win!");
    } else if(col[0]+col[1]+col[2] === 3 || col[0]+col[1]+col[2] === -3) {
      console.log("you win!")
    } else if(addDiag(i)[0] === 3 || addDiag(i)[1] === 3 || addDiag(i)[0] === -3 || addDiag(i)[1] === -3) {
      console.log("you win!")
    } else {
      //continue
    }
  }

  //check for draw HERE
}



//GLOBAL VAIABLES---------------------
var game;
//FRONTEND BELOW THIS LINE----------------------------

$(document).ready(function() {






})
