function Game () {

}

Game.prototype.timeReaction = function (numRotations) {
  var startTime = Date.now();
  window.onkeydown = function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      var endTime = Date.now();
      var reactionTime = endTime - startTime;

      var markSRC
      if (e.keyCode - 37 == numRotations) {
        markSRC = "./images/check_mark.png";
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

      window.onkeydown = null;
    }
  }
};

module.exports = Game;
