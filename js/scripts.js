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
  // var boardArr = [board.rowA, board.rowB, board.rowC]
  // var center = (boardArr[Math.floor(boardArr.length/2)])[boardArr[(Math.floor(boardArr.length/2)].length)/2]
  // for (var k=0;k<boardArr.length;k++){
  //   sum += (boardArr[k] + center + board[k-])
  // }
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
}

function Game(name1, name2) {
  this.player1 = new Player(name1);
  this.player2 = new Player(name2);
  this.board = new Board();

  this.turn = 1;
}

board.prototype.move(space){
  if (space !== 0){
    return
  } else if (isOdd(game.turn)){
    space = 1;
    board.checkWin();
  } else {
    space = -1;
    board.checkWin();
  }
}

board.prototype.checkWin(){
  //this runs after a space is assigned but before the turn changes
  var sum = 0;
  var boardArr = [board.rowA, board.rowB, board.rowC]
  for (var i = 0; i<boardArr.length; i++){
    var currBoard = boardArr[i]
    if(addRow(currBoard) === 3|| addRow(currBoard) === -3){
      //current player wins
      alert("You Win");
    } else if (checkCol(i) === 3 || checkCol(i) === -3){
      //current player wins
      alert("You Win");
    } else if (((checkDiag(i)[0] === 3) || (checkDiag(i)[0] === -3)) || ((checkDiag(i)[1] === 3) || (checkDiag(i)[1] === -3))){
      //current player wins
      alert("You Win");
    } else {
      game.turn++
      console.log("turn: " game.turn);
      checkDraw();
    }
  }
}

//GLOBAL VAIABLES---------------------


//FRONTEND BELOW THIS LINE----------------------------
