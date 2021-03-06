/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var View = __webpack_require__(1);
	var Game = __webpack_require__(2);
	
	$(function () {
	  // var canvas = document.getElementById("myCanvas");
	  // var ctx = canvas.getContext("2d");
	  var game = new Game();
	  new View(game);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	var View = function (game) {
	  this.game = game;
	
	  this.bindStart();
	}
	
	View.prototype.bindStart = function () {
	  window.onkeydown = function (e) {
	    if (e.keyCode == 32) {
	      window.onkeydown = null;
	      $('.start-button').remove();
	      $('h4').remove();
	      this.start();
	    }
	  }.bind(this);
	};
	
	View.prototype.start = function () {
	  var time = 1000 + Math.random() * 3000;
	  window.onkeydown = function (e) {
	    if (e.keyCode >= 37 && e.keyCode <= 40) {
	      this.falseStart();
	    }
	  }.bind(this);
	
	  this.timeoutID = setTimeout(function () {
	    var $pacman = $('<img>');
	    $pacman.attr({
	      src: './images/pacman.png',
	      class: "pacman"
	    });
	
	    var numRotations = Math.floor(Math.random() * 4);
	    $pacman.css('transform', 'rotate(' + numRotations * 90 + 'deg)')
	
	    $('figure').append($pacman);
	
	    this.timeReaction(numRotations);
	  }.bind(this), time);
	};
	
	View.prototype.timeReaction = function (numRotations) {
	  var startTime = Date.now();
	  window.onkeydown = function (e) {
	    if (e.keyCode >= 37 && e.keyCode <= 40) {
	      var endTime = Date.now();
	      var reactionTime = endTime - startTime;
	
	      var markSRC
	      if (e.keyCode - 37 == numRotations) {
	        markSRC = "./images/check_mark.png";
	        this.game.addTime(reactionTime);
	      } else {
	        markSRC = "./images/x_mark.png";
	      }
	      var $mark = $('<img>');
	      $mark.attr({
	        src: markSRC,
	        class: "mark"
	      });
	
	      var $div = $('<div>');
	      $div.append($mark);
	      var $timeText = $('<span>');
	      $timeText.text(reactionTime + "ms");
	      $div.append($timeText);
	      $('figure').append($div);
	
	      var $h3 = $('<h3>');
	      $h3.text("Press space to try again");
	      $('figure').append($h3);
	
	      this.displayAverages();
	
	      window.onkeydown = function (e) {
	        if (e.keyCode == 32) {
	          this.clearScreen();
	        }
	      }.bind(this);
	    }
	  }.bind(this);
	};
	
	View.prototype.displayAverages = function () {
	  var $h4 = $('<h4>');
	  $h4.attr('class', 'average');
	  $h4.text("Tries| " + this.game.reactionTimes.length + "\nAverage| " + this.game.averageTime());
	
	  $('figure').append($h4);
	};
	
	View.prototype.falseStart = function () {
	  var $falseStart = $('<h3>');
	  $falseStart.text("Too soon!");
	
	  var $mark = $('<img>');
	  $mark.attr({
	    src: "./images/x_mark.png",
	    class: "mark"
	  });
	
	  var $div = $('<div>');
	  $div.attr('class', 'false-start')
	  $div.append($mark);
	  $div.append($falseStart);
	  $('figure').append($div);
	
	  var $h3 = $('<h3>');
	  $h3.text("Press space to try again");
	  $('figure').append($h3);
	
	  window.clearTimeout(this.timeoutID);
	
	  window.onkeydown = function (e) {
	    if (e.keyCode == 32) {
	      this.clearScreen();
	    }
	  }.bind(this);
	};
	
	View.prototype.clearScreen = function () {
	  $('div').remove();
	  $('img').remove();
	  $('h3').remove();
	
	  this.start();
	};
	
	module.exports = View;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function Game () {
	  this.reactionTimes = [];
	}
	
	Game.prototype.addTime = function (time) {
	  this.reactionTimes.push(time);
	};
	
	Game.prototype.averageTime = function () {
	  var total = 0;
	  this.reactionTimes.forEach(function (time) {
	    total += time;
	  })
	  var average = total / this.reactionTimes.length;
	
	  return Math.floor(average);
	};
	
	module.exports = Game;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map