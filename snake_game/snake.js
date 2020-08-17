function Snake(){
    this.color = 'white'
    this.xdir = 1;
    this.ydir = 0;
    this.length = 1;
    //head position starts center of screen
    this.positions = [createVector(canvasWidth/2, canvasHeight/2)];

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
        if(newPos.x > canvasWidth || newPos.y > canvasHeight || newPos.x < 0 || newPos.y < 0){
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
        for(var i = 0; i < this.positions.length; i++){
            fill(this.color);
            rect(this.positions[i].x, this.positions[i].y, tileSize, tileSize);
        }
    }

    this.tryEat = function(food){
        curPos = this.positions[0];
        xpos = curPos.x;
        ypos = curPos.y;
        if(xpos == food.x && ypos == food.y){
            this.length++;
            food.randomizePos();
        }
    }

    this.reset = function(){
        this.xdir = 1;
        this.ydir = 0;
        this.length = 1;
        this.positions = [createVector(canvasWidth/2, canvasHeight/2)];
        mode = gameOverScreen;
    }
  }