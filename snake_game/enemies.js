function Enemies(){
    this.enemies = [];
    this.numEnemies = 0;

    this.spawnRandom = function(){ //spawns random enemy
        this.numEnemies++;
        switch(floor(random(1, this.numEnemies)) % 2){ //pick random enemy, modulo makes sure it fits into possible cases
            case 1:
                this.enemies.push(new Poisonfood());
                break;
        } 
    }
    
    this.show = function(){ //draws every enemy currently spawned
        for(let i = 0; i < this.numEnemies; i++){
            this.enemies[i].update;
            this.enemies[i].show;
        }
    }


}