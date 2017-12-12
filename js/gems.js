//===========================
//========== GEMS ===========
//===========================


var Gems = function (x, y, speed) {
    //Gem location
    var x = Math.floor(Math.random() * -250);
    var y = EnemyPos[Math.floor(Math.random() * 4)];
    this.x = x;
    this.y = y;
    //Gem speed
    this.speed = 50 + Math.floor(Math.random() * 120);
    //Gem image
    var SPEED = Math.floor(Math.random() * 4);
    this.sprite = myGemsList[SPEED];
};

Gems.prototype.update = function(dt) {
    
    if (this.x > 1010) {
        this.x = 1;
    }
    this.x = this.x + this.speed * dt;
    
    // Control the collision of the gem with the player
    if (player.x < this.x + 45 && 
        player.x + 35 > this.x && 
        player.y < this.y + 20 && 60 + player.y > this.y) {
        
        y = EnemyPos[Math.floor(Math.random() * 3)];
        this.y = y;
        
        player.score = player.score + 30;
        this.x = 1;
    }
};
// Draw the gems on the screen
Gems.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Instantiate the objects.
var allGems =[]; 
for(var i = 0; i<GemsNum; i++){
    var gem = new Gems();
    // Place all gems objects in an array called allGems
    allGems.push(gem);
}