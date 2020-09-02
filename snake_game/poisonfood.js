function Poisonfood(){
    this.xpos = floor(random(0,gridWidth))*tileSize; //generate random position aligned on grid
    this.ypos = floor(random(0,gridHeight))*tileSize;

    this.show = function(){
        if(this.xpos == food.xpos && this.ypos == food.ypos){
            this.xpos = floor(random(0,gridWidth))*tileSize; //pick a new location
            this.ypos = floor(random(0,gridHeight))*tileSize;
        }
        fill(145, 47, 207);
        rect(this.xpos, this.ypos, tileSize, tileSize);//xpos, ypos, xsize, ysize
    }

    this.update = function(){
        //this enemy doesn't move
    }
    
}