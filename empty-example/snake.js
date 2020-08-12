function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.length = 0; //length of tail
    this.tail = []; //history of head positions

    this.dir = function(x,y){
        this.xspeed = x;
        this.yspeed = y;
    }
  
    this.update = function(){
        if(this.length === this.tail.length){ //if snake length is unchanged
            for(var i = 0; i < this.length-1; i++){ //shift the tail
                this.tail[i] = this.tail[i+1]; //diagram: head<-tail[length]<-tail[length-1]...<-tail[0]
            }
            this.tail[this.length] = createVector(this.x, this.y); //set last unit to head
        }
        else{ //snake ate food, don't shift just add a new piece where head used to be
            //this.tail.push(createVector(this.x, this.y));
        }

        //update snake head position
        this.x = this.x + this.xspeed*tile;
        this.y = this.y + this.yspeed*tile;

        this.x = constrain(this.x, 0, width-tile);
        this.y = constrain(this.y, 0, height-tile);

    }
  
    this.show = function(){
        fill('white');
        rect(this.x, this.y, tile, tile);//xpos, ypos, xsize, ysize
        for(var i = 0; i < this.tail.length; i++){
            fill('white');
            rect(this.tail[i].x, this.tail[i].y, tile, tile);
        }
    }

    this.eat = function(food){
        if(this.x == food.x && this.y == food.y){
            this.length++;
            food.update();
        }
    }
  }