var snake;
var tile = 20; //unit of size the canvas is divided into
var food;

function setup() {
  createCanvas(600, 600);
  frameRate(10);
  snake = new Snake();
  food = new Food();
}

function draw() {
  background(50);
  food.show();
  snake.update();
  snake.show();
  snake.eat(food);

}

function roundToTile(num){ //rounds number to nearest increment of tile size
  return round(num/tile) * tile;
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.dir(0,-1)
  }
  else if(keyCode === DOWN_ARROW){
    snake.dir(0,1)
  }
  else if(keyCode === LEFT_ARROW){
    snake.dir(-1,0)
  }
  else if(keyCode === RIGHT_ARROW){
    snake.dir(1,0)
  }
}

