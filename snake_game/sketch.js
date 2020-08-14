var canvasWidth = 600
var canvasHeight = 600
var tileSize = 20; //unit of size the canvas is divided into
var gridWidth = canvasWidth / tileSize
var gridHeight = canvasHeight / tileSize
var snake;
var food;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(10);
  snake = new Snake();
  food = new Food();
}

function draw() {
  background(50);
  food.show();
  snake.update();
  snake.show();
  snake.tryEat(food);
  

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

