function Poisonfood(){
    this.xpos = random(1,gridWidth-1)*tileSize; //generate random position aligned on grid 1 tile away from walls
    this.ypos = random(1,gridHeight-1)*tileSize;

    this.show = function(){
        fill(145, 47, 207);
        rect(this.x, this.y, tileSize, tileSize);//xpos, ypos, xsize, ysize
    }

    this.update = function(){
        //this enemy doesn't move
    }
    
}