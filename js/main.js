var View = require('./view');
var Game = require('./game');

$(function () {
  // var canvas = document.getElementById("myCanvas");
  // var ctx = canvas.getContext("2d");
  var game = new Game();
  new View(game);
});
