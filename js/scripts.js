//LOOSE HELPER FUNCTIONS--------------
function isOdd(num){
  if (num % 2 === 0 && num > 0){
    return false
  } else {
    return true
  }
}

function addRow(arr){
  var sum = 0;
  for (var j=0;j<arr.length;j++){
    sum+= arr[j];
  }
  return sum;
}

function addCol(num){
  var sum = board.rowA[num] + board.rowB[num] + board.rowC[num];
  return sum
}

function addDiag(num){
  var sum = [];
  sum.push(board.rowA[num] + board.rowB[num + 1] + board.rowC[num + 2]);
  sum.push(board.rowA[num + 2] + board.rowB[num + 1] + board.rowC[num]);
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
  if (isOdd(game.turn)) {
    (this.board[xPos])[yPos] = 1;
    console.log(this.board.rowA);
    console.log(this.board.rowB);
    console.log(this.board.rowC);
    this.turn++;
  }else {
    (this.board[xPos])[yPos] = -1;
    console.log(this.board.rowA);
    console.log(this.board.rowB);
    console.log(this.board.rowC);
    this.turn++;
  }
}

//GLOBAL VAIABLES---------------------
var game;
//FRONTEND BELOW THIS LINE----------------------------

$(document).ready(function() {






})
