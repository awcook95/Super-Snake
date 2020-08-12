function Food(){
    this.x = roundToTile(random(width));
    this.y = roundToTile(random(height));

    this.update = function(){
        this.x = roundToTile(random(width));
        this.y = roundToTile(random(height));
    }

    this.show = function(){
        fill(255, 0, 100);
        rect(this.x, this.y, tile, tile);//xpos, ypos, xsize, ysize
    }
}