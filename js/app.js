//===============================
// Initializing Global Variables
//===============================

var GemsNum = 4; // Total number of gems
var EnemiesNum = 3; // Total number of enemies
var EnemyPos = [60, 145, 234]; // Enemy position

var myGemsList = ['images/extra/diamond-yellow.png',
                'images/extra/diamond-red.png',
                'images/extra/diamond-pink.png',
                'images/extra/coin.png'
               ]; 

var myEnemiesList = ['images/extra/monster-01.png', 
                     'images/extra/monster-02.png', 
                     'images/extra/monster-03.png'];

var horizontalKeys = 83; //up & down key presses
var verticalKeys = 101; //right & left key presses

// **************************************************
// **************************************************
// **************************************************





// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});