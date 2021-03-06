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
