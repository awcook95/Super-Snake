var canvasWidth = 600
var canvasHeight = 600
var tileSize = 20; //unit of size the canvas is divided into
var gridWidth = canvasWidth / tileSize
var gridHeight = canvasHeight / tileSize
var snake;
var food;

var mode = 0;
const startScreen = 0;
const gameScreen = 1;
const gameOverScreen = 2;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(10);
  snake = new Snake();
  food = new Food();

}

function draw() {
  if(mode == startScreen){
    background(200);
    fill(0);
    textSize(64);
    textFont('Helvetica');
    text('Super Snake', 110, 300);
    textSize(12);
    text('Press Enter to Start', 230, 350);
    if(keyCode === ENTER){
      mode = gameScreen;
    }
  }
  else if(mode == gameScreen){
  background(50);
  food.show();
  snake.show();
  snake.update();
  snake.tryEat(food);
  }
  else if(mode == gameOverScreen){
    background(200);
    fill(0);
    textSize(64);
    textFont('Helvetica');
    text('Game Over', 125, 300);
    textSize(12);
    text('Press Enter to Play Again', 225, 350);
    if(keyCode === ENTER){
      mode = gameScreen;
    }
  }
  

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.turn(0,-1)
  }
  else if(keyCode === DOWN_ARROW){
    snake.turn(0,1)
  }
  else if(keyCode === LEFT_ARROW){
    snake.turn(-1,0)
  }
  else if(keyCode === RIGHT_ARROW){
    snake.turn(1,0)
  }
}

//function that returns positive remainder for negative numbers
function mod(n, m) {
  return ((n % m) + m) % m;
}

function containsVector(vec, array, slice){
  for(var i = slice; i < array.length; i++){
    if(vec.equals(array[i])) return true;
  }
  return false;
}

