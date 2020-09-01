function Food(){
    this.xpos = floor(random(0, gridWidth)) * tileSize;
    this.ypos = floor(random(0, gridHeight)) * tileSize;

    this.show = function(){
        fill(255, 0, 100);
        rect(this.xpos, this.ypos, tileSize, tileSize);//xpos, ypos, xsize, ysize
    }

    this.randomizePos = function(){
        this.xpos = floor(random(0, gridWidth)) * tileSize;
        this.ypos = floor(random(0, gridHeight)) * tileSize;
    }

}