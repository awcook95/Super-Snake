function Snake(){
    this.score = 0;
    this.colors = [color(255,255,255), color(247, 94, 94), color(245, 66, 66), color(245, 32, 32), color(204, 12, 12)]
    this.charge = 0;
    this.xdir = 1;
    this.ydir = 0;
    this.length = 1;
    this.collision = true; //wrap around the stage or not
    this.positions = [createVector(canvasWidth/2, canvasHeight/2)]; //head position starts center of screen

    this.turn = function(x,y){
        if(this.length > 1 && x * -1 == this.xdir && y * -1 == this.ydir){ //check if attempting to turn backwards while longer than 1
            return;
        }
        else{
            this.xdir = x;
            this.ydir = y;
        }
    }

    this.update = function(){
        curPos = this.positions[0];
        curX = curPos.x;
        curY = curPos.y;
        //current position + 1 tile distance in the direction headed
        //newPos = createVector(mod(curX + this.xdir*tileSize,canvasWidth), mod(curY + this.ydir*tileSize, canvasHeight));
        newPos = createVector(curX + this.xdir*tileSize, curY + this.ydir*tileSize);
        //check if collision is on and reset if hit wall
        if(this.collision && newPos.x > canvasWidth || newPos.y > canvasHeight || newPos.x < 0 || newPos.y < 0){
            this.reset();
        }

        //check if head ran into body and reset if true
        else if(this.positions.length > 2 && containsVector(newPos, this.positions, 2)){
            this.reset();
        }
        else{
            //insert new head position at beginning of array
            this.positions.unshift(newPos);
            //if snake ate food do not remove from back of array
            if(this.positions.length > this.length){
                this.positions.pop();
            }
        }

    }
  
    this.show = function(){
        for(let i = 0; i < this.positions.length; i++){
            fill(this.colors[this.charge]);
            rect(this.positions[i].x, this.positions[i].y, tileSize, tileSize);
        }
    }

    this.tryEat = function(food){
        curPos = this.positions[0];
        xpos = curPos.x;
        ypos = curPos.y;
        if(xpos == food.xpos && ypos == food.ypos){
            if(this.charge < 4){
                this.charge++;
            }
            this.score++;
            this.length++;
            food.randomizePos();
        }
    }

    this.hitEnemy = function(){ //checks if head position of snake contacts any enemy
        for(let i = 0; i < enemies.count; i++){
            if(this.positions[0].x == enemies.list[i].xpos && this.positions[0].y == enemies.list[i].ypos){
                this.reset();
            }
        }
    }

    this.showScore = function(){
        fill(200);
        textSize(20);
        textFont('Helvetica');
        text('Score: ' + this.score, 15, 30);
    }

    this.reset = function(){
        this.score = 0;
        this.xdir = 1;
        this.ydir = 0;
        this.length = 1;
        this.positions = [createVector(canvasWidth/2, canvasHeight/2)];
        this.collision = true;
        food.randomizePos();
        enemies.reset();
        mode = gameOverScreen;
    }

    this.bomb = function(){
    if(this.charge == 4){
        this.charge = 0;
        fill(255);
        rect(0, 0, 600, 600);
        enemies.reset();
        }
    }
  }