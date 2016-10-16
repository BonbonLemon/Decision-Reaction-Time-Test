var View = function (game) {
  this.game = game;

  this.bindStart();
}

View.prototype.bindStart = function () {
  window.onkeydown = function (e) {
    if (e.keyCode == 32) {
      window.onkeydown = null;
      $('h2').remove();
      this.start();
    }
  }.bind(this);
};

View.prototype.start = function () {
  var time = 1000 + Math.random() * 3000;
  window.onkeydown = function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      console.log("false start!");
      window.clearTimeout(this.timeoutID);
      window.onkeydown = null;
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

    this.game.timeReaction(numRotations);
  }.bind(this), time);
};

module.exports = View;
