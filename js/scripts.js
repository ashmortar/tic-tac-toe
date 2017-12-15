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
  sum.push(game.board.row1[num] + game.board.row2[num + 1] + game.board.row3[num + 2]);
  sum.push(game.board.row1[num + 2] + game.board.row2[num + 1] + game.board.row3[num]);
  return sum;
}

function checkDraw(){
  if (game.turn > Math.pow(game.board.row1.length, 2)) {
    alert("draw");
    gameOver = true;
  }
}

function launchGame(){
  game = new Game("Player One", "Player Two")
}

function randomSpace() {
  var yPos = "row" + Math.floor(3*Math.random()+1).toString();
  var xPos = Math.floor(3*Math.random());
  //console.log(yPos, xPos);
  var array = [yPos, xPos];
  var move = game.move(array);
  if (move === "taken"){
    randomSpace()
  }
  game.move(array);
}

function checkAlmost() {

  var boardState = [game.board.row1, game.board.row2, game.board.row3];
  var result = []
  for (var i = 0;i<boardState.length;i++){
    var row = boardState[i];
    var col = [game.board.row1[i], game.board.row2[i], game.board.row3[i]];


    if (row[0]+row[1]+row[2] === 2 || row[0]+row[1]+row[2] === -2){
      for (var m = 0; m < row.length; m++) {
        if (row[m] === 0) {
          result = ["row" + (i +1), m];
        }
      }
    } else if(col[0]+col[1]+col[2] === 2 || col[0]+col[1]+col[2] === -2) {
      for (var m = 0; m < col.length; m++) {
        if (col[m] === 0) {
          result = ["row" + (i +1), m];
        }
      }
    }
  }
  var diagRight = ["row1", game.board.row1[0], "row2", game.board.row2[1], "row3", game.board.row3[2]];
  var diagLeft = ["row1", game.board.row1[2], "row2", game.board.row2[1], "row3", game.board.row3[0]];
  if(diagRight[1]+diagRight[3]+diagRight[5] === 2 || diagRight[1]+diagRight[3]+diagRight[5] === -2) {
    for (var n = 1; n < diagRight.length; n += 2) {
      if (diagRight[n] === 0) {
        return [diagRight[n-1], diagRight[n]];
      }
    }
  } else if(diagLeft[1]+diagLeft[3]+diagLeft[5] === 2 || diagLeft[1]+diagLeft[3]+diagLeft[5] === -2) {
    for (var o = 1; o < diagLeft.length; o += 2) {
      if (diagLeft[o] === 0) {
        return [diagLeft[o-1], diagLeft[o]];
      }
    }
  }
  //console.log(result);
  return result;
}

function autoPig(){
  //will only ever be called on even turns
  console.log("AUTOPIG ENGAGE.");
  var almost = checkAlmost()
  if (game.turn === 2) {
    randomSpace();
  } else if (almost.length > 0){
    console.log(almost);
    game.move(almost)
  } else if(game.board.row2[1] === 0) {
    game.move(["row2", 1]);
  } else {
    randomSpace();
  }
}

//OBJECT DEFINITIONS------------------
function Player(name) {
  this.name = name;
  this.piece = 0;
}

function Board() {
  this.row1 = [0, 0, 0];
  this.row2 = [0, 0, 0];
  this.row3 = [0, 0, 0];
  // console.log(this.row1);
}

function Game(name1, name2) {
  this.player1 = new Player(name1);
  this.player2 = new Player(name2);
  this.board = new Board();

  this.turn = 1;
}

Game.prototype.move = function(arr){
  var yPos = arr[0]
  var xPos = arr[1]
  if ((this.board[yPos])[xPos] !== 0){
    console.log("taken");
    return "taken";
  } else if (isOdd(game.turn)) {
    (this.board[yPos])[xPos] = 1;
    console.log(this.board.row1);
    console.log(this.board.row2);
    console.log(this.board.row3);
    this.turn++;
    game.checkWin();
  } else if (isOdd(game.turn) === false) {
    (this.board[yPos])[xPos] = -1;
    console.log(this.board.row1);
    console.log(this.board.row2);
    console.log(this.board.row3);
    this.turn++;
    game.checkWin();
  } else {
    console.log("AUTOPIG IS DISPLEASED");
  }
}

Game.prototype.checkWin = function() {
  var boardState = [this.board.row1, this.board.row2, this.board.row3];
  for (var i = 0;i<boardState.length;i++){
    var row = boardState[i];
    var col = [this.board.row1[i], this.board.row2[i], this.board.row3[i]];

    if (row[0]+row[1]+row[2] === 3 || row[0]+row[1]+row[2] === -3){
      gameOver = true;
      alert("you win!");
    } else if(col[0]+col[1]+col[2] === 3 || col[0]+col[1]+col[2] === -3) {
      gameOver = true;
      alert("you win!")
    } else if(addDiag(i)[0] === 3 || addDiag(i)[1] === 3 || addDiag(i)[0] === -3 || addDiag(i)[1] === -3) {
      gameOver = true;
      alert("you win!")
    } else {
      //continue
    }
  }

  checkDraw();
}



//GLOBAL VAIABLES---------------------
var game;
var gameOver = false;
//FRONTEND BELOW THIS LINE----------------------------
$(document).ready(function() {

function boardUpdate() {
  //debugger;
  for (var key in game.board){
    for (var i = 0; i < key.length-1; i++) {
      if ((game.board[key])[i] === 1) {
        $("."+key+"."+i).text("X")
      } else if ((game.board[key])[i] === -1) {
        $("."+key+"."+i).text("O")
      } else if ((game.board[key])[i] === 0){
        $("."+key+"."+i).text("")
      } else {
        console.log("AUTOPIG IS COMING");
      }
    }
  }
}

  launchGame();
  $("td").click(function() {

    if (isOdd(game.turn)) {
      var check = $(this).attr('class').split(" ");
      //console.log(check);
      game.move(check);
      if (isOdd(game.turn) === false && ($("input:radio[name=playersNumber]:checked").val() === "1") && (gameOver === false) ) {
        autoPig();
      }
      boardUpdate();
    }
  })

  $("#reset").click(function() {
    launchGame();
    boardUpdate();
  })
})
