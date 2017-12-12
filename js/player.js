//===========================
//======== PLAYER ===========
//===========================

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y, speed) {
    this.sprite = 'images/extra/snow-white.png';
    this.x = x;
    this.y = y;
    this.score = 0;
    this.speed = 100;    
};

// update the location
Player.prototype.update = function() {
    if (this.x > 1010) {
        this.x = 402;
    }
    
    if (this.y > 400) {
        this.y = 400;
    }
    
    if (this.x < 0) {
        this.x = 0;
    }
    
    if (this.y < 35) {
        this.y = 600;
        this.x = 200;
        this.addPoints();        
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    // re-draw the score text
    ctx.fillText("Score: "+ this.score, 880, 530); // score will be shown in the bottom-right corner
    ctx.font='25px san sarif'; // this is to change font
    ctx.fillStyle='#f2f2f2';
};

//move the Player
Player.prototype.handleInput = function(KeyPress) {
    switch (KeyPress) {
        case 'left':
            this.x = this.x - verticalKeys;
            break;
        case 'right':
            this.x = this.x + verticalKeys;
            break;
        case 'up':
            this.y = this.y - horizontalKeys;
            break;
        case 'down':
            this.y = this.y + horizontalKeys;
            break;
    }
};

//when the Player and the enemies have a collision
Player.prototype.reset = function() {
    //reset Player position
    this.x = 300;
    this.y = 300;
    //reset score
    this.score = 0;
};

// When the player reaches the water, score will increase by 70+
// Add points to the score
Player.prototype.addPoints = function(){
    // Add 70 points to the Player score
    this.score = this.score + 70;
    // clear a rectangle over the score text
    ctx.clearRect(1, 580, 600, 20); 
};


// Place the Player object in a variable called player
var player = new Player(200, 400);