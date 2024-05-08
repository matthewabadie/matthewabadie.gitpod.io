var runLevels = function (window) {
  window.opspark = window.opspark || {};


  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;


  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;


    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;


    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);


    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE


    //obstacle
  function createLaser(x, y, damage){
    var hitZoneSize = 25;
    var damageFromObstacle = damage;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/c.png");
    obstacleImage.scaleX = 0.25
    obstacleImage.scaleY = 0.25
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -25;
    obstacleImage.y = -25;
  }


  function createWire(x, y, damage){
    var hitZoneSize = 25;
    var damageFromObstacle = damage;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/gb.png");
    obstacleImage.scaleX = 0.15
    obstacleImage.scaleY = 0.15
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -25;
    obstacleImage.y = -25;
  }


  //enemy parameters
  function createGuard(x,y){
  var enemy = game.createGameItem("enemy", 25);
  var redSquare = draw.bitmap('img/image.png');
  redSquare.x = -25;
  redSquare.y = -25;
  redSquare.scaleX = 0.25
  redSquare.scaleY = 0.25
  enemy.addChild(redSquare);
  enemy.x = x;
  enemy.y = y;
  game.addGameItem(enemy);
  enemy.velocityX = -3;


  enemy.onPlayerCollision = function (){
    game.changeIntegrity(-50);
    enemy.fadeOut();


  }
  //enemy behaivior
  enemy.onProjectileCollision = function(){
    game.increaseScore(50);
    enemy.fadeOut();
  }
}


  function createMoney(x, y){
    var reward = game.createGameItem("reward", 25);
    var rewardImage = draw.bitmap('img/money.webp');
    rewardImage.x = -25;
    rewardImage.y = -25;
    rewardImage.scaleX = 0.25;
    rewardImage.scaleY = 0.25;
    reward.addChild(rewardImage);
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
    reward.velocityX = -3;


    reward.onPlayerCollision = function (){
      game.changeIntegrity(10);
      reward.fadeOut();


    }
    //enemy behaivior
    reward.onProjectileCollision = function(){
      game.increaseScore(10);
      reward.fadeOut();
    }
  };


  function createHoneybun(x, y){
    var reward = game.createGameItem("reward", 25);
    var rewardImage = draw.bitmap('img/honeybun.png');
    rewardImage.x = -25;
    rewardImage.y = -25;
    rewardImage.scaleX = 0.25
    rewardImage.scaleY = 0.25
    reward.addChild(rewardImage);
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
    reward.velocityX = -3;


    reward.onPlayerCollision = function (){
      game.changeIntegrity(10);
      reward.fadeOut();


    }
    //enemy behaivior
    reward.onProjectileCollision = function(){
      game.increaseScore(10);
      reward.fadeOut();
    }
  };


  function createMarker(x, y){
    var marker = game.createGameItem("marker", 25);
    var markerImage = draw.rect(50, 50, "green");
    markerImage.x = -25;
    markerImage.y = -25;
    marker.addChild(markerImage);
    marker.x = x;
    marker.y = y;
    game.addGameItem(marker);
    marker.velocityX = -3;


    marker.onPlayerCollision = function (){
      game.changeIntegrity(25);
      game.increaseScore(100);
      startLevel();
      marker.fadeOut();
    }
      //enemy behaivior
    marker.onProjectileCollision = function(){
        game.increaseScore(100);
        game.changeIntegrity(25);
        startLevel();
        marker.fadeOut();
    }
  };


    function startLevel() {
      console.log('pls')
      // TODO 13 goes below here
      var level = levelData[currentLevel]
      var levelObjects = level.gameItems
      console.log('swjat')
      for (var i in levelObjects){
        console.log('???')
        if (levelObjects[i].type === 'wire'){
          console.log('sigma')
          createWire(levelObjects[i].x, levelObjects[i].y, levelObjects[i].damage)
        }
        if (levelObjects[i].type === 'laser'){
          console.log('sigmsa')
          createLaser(levelObjects[i].x, levelObjects[i].y, levelObjects[i].damage)
        }
        if (levelObjects[i].type === 'guard'){
          console.log('sigma56')
          createGuard(levelObjects[i].x, levelObjects[i].y)
        }
        if (levelObjects[i].type === 'honeybun'){
          console.log('sigma89')
          createHoneybun(levelObjects[i].x, levelObjects[i].y)
        }
        if (levelObjects[i].type === 'money'){
          createMoney(levelObjects[i].x, levelObjects[i].y)
        }
        if (levelObjects[i].type === 'marker'){
          createMarker(levelObjects[i].x, levelObjects[i].y)
        }
      }




      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}


