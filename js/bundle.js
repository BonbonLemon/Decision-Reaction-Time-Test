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

	var View = __webpack_require__(2);
	var Game = __webpack_require__(1);
	
	$(function () {
	  // var canvas = document.getElementById("myCanvas");
	  // var ctx = canvas.getContext("2d");
	  var game = new Game();
	  new View(game);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Game () {
	
	}
	
	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var View = function (game) {
	  this.game = game;
	
	  this.bindStart();
	}
	
	View.prototype.bindStart = function () {
	  window.onkeydown = function (e) {
	    if (e.keyCode == 32) {
	      $('h2').remove();
	      this.start();
	    }
	  }.bind(this);
	};
	
	View.prototype.start = function () {
	  var time = 1000 + Math.random() * 3000;
	
	  setTimeout(function () {
	    var $pacman = $('<img>');
	    $pacman.attr('src', './images/pacman.png')
	    $('body').append($pacman);
	  }, time);
	};
	
	module.exports = View;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map