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
