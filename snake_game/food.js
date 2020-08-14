function Food(){
    this.x = floor(random(0, gridWidth)) * tileSize
    this.y = floor(random(0, gridHeight)) * tileSize

    this.show = function(){
        fill(255, 0, 100);
        rect(this.x, this.y, tileSize, tileSize);//xpos, ypos, xsize, ysize
    }

    this.randomizePos = function(){
        this.x = floor(random(0, gridWidth)) * tileSize
        this.y = floor(random(0, gridHeight)) * tileSize
    }

}