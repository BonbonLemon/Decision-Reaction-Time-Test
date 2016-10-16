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
    $pacman.attr('src', './images/pacman.png');

    var num_rotations = Math.floor(Math.random() * 4);
    $pacman.css('transform', 'rotate(' + num_rotations * 90 + 'deg)')

    $('figure').append($pacman);
    console.log(num_rotations);
  }, time);
};

module.exports = View;
