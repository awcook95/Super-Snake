function Enemies(){
    this.list = [];
    this.count = 0;

    this.spawnRandom = function(score){ //spawns random enemy
        if(floor(random(0, 100) < score/2)){ //the higher the score the higher the chance of spawn
            this.count++;
            enemy = new Poisonfood();
            this.list.push(enemy);
        }
        
    }
    
    this.show = function(){ //draws every enemy currently spawned
        for(let i = 0; i < this.count; i++){
            this.list[i].update();
            this.list[i].show();
        }
    }

    this.reset = function(){
        this.list = [];
        this.count = 0;
    }


}