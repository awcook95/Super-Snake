var canvasWidth = 600
var canvasHeight = 600
var tileSize = 20; //unit of size the canvas is divided into
var gridWidth = canvasWidth / tileSize
var gridHeight = canvasHeight / tileSize
var framerate = 10;
var snake;
var food;
var enemies

//game state variables
var mode = 0;
const startScreen = 0;
const gameScreen = 1;
const gameOverScreen = 2;
const pause = 3;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(framerate);
  snake = new Snake();
  food = new Food();
  enemies = new Enemies();

}

//main game loop
function draw() {
  if(mode == startScreen){
    background(200);
    fill(0);
    textAlign(CENTER);
    textSize(64);
    textFont('Helvetica');
    text('Super Snake', 290, 300);
    textSize(12);
    text('Press Enter to Start\nControls: Arrow keys to move\nOnce fully charged, z for special move\np to pause', 290, 350);
    if(keyCode === ENTER){
      mode = gameScreen;
    }
  }
  else if(mode == gameScreen){
    textAlign(LEFT);
    background(50);
    enemies.spawnRandom(snake.score);
    food.show();
    enemies.show();
    snake.showScore();
    snake.show();
    snake.update();
    snake.hitEnemy();
    snake.tryEat(food);
    if(keyCode === 80){
      mode = pause;
    }
  }
  else if(mode == gameOverScreen){
    framerate = 5;
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

  else if(mode == pause){
    background(50);
    snake.showScore();
    food.show();
    snake.show();
    dialogueBox("Game paused: Press u to unpause");
    if(keyCode === 85){
      mode = gameScreen;
    }
  }
  

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.turn(0,-1);
  }
  else if(keyCode === DOWN_ARROW){
    snake.turn(0,1);
  }
  else if(keyCode === LEFT_ARROW){
    snake.turn(-1,0);
  }
  else if(keyCode === RIGHT_ARROW){
    snake.turn(1,0);
  }
  else if(keyCode === 90){
    snake.bomb();
  }
}

//function that returns positive remainder for negative numbers
function mod(n, m) {
  return ((n % m) + m) % m;
}

//function that checks if a vector (x,y) is in an array starting from slice
function containsVector(vec, array, slice){
  for(let i = slice; i < array.length; i++){
    if(vec.equals(array[i])) return true;
  }
  return false;
}

