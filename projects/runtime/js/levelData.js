var makeLevelData = function (window) {
  window.opspark = window.opspark || {};


  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;


    // this data will allow us to define all of the
    // behavior of our game


    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "wire", x: 400, y: groundY-25, damage: 25 },
          { type: "laser", x: 600, y: groundY-25, damage: 25 },
          { type: "honeybun", x: 1000, y: groundY-25 },
          { type: "money", x: 750, y: groundY-25 },
          { type: "guard", x: 900, y: groundY-50 },


          { type: "wire", x: 1400, y: groundY-25, damage: 25 },
          { type: "laser", x: 1600, y: groundY-25, damage: 25 },
          { type: "honeybun", x: 2000, y: groundY-25 },
          { type: "money", x: 1500, y: groundY-25 },
          { type: "guard", x: 1900, y: groundY-50 },
          { type: "marker", x: 3000, y: groundY-25 },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "wire", x: 400, y: groundY, damage: 100 },
          { type: "laser", x: 500, y: groundY, damage: 10 },
          { type: "honeybun", x: 700, y: groundY },
          { type: "money", x: 450, y: groundY },
          { type: "guard", x: 700, y: groundY-50 },
          { type: "wire", x: 800, y: groundY, damage: 100 },
          { type: "laser", x: 900, y: groundY, damage: 10 },
          { type: "honeybun", x: 1100, y: groundY },
          { type: "money", x: 850, y: groundY },
          { type: "guard", x: 1100, y: groundY-50 },
          { type: "wire", x: 1400, y: groundY, damage: 100 },
          { type: "laser", x: 1600, y: groundY, damage: 10 },
          { type: "honeybun", x: 1900, y: groundY },
          { type: "money", x: 1500, y: groundY },
          { type: "guard", x: 1900, y: groundY-50},
          { type: "marker", x: 3500, y: groundY },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}


