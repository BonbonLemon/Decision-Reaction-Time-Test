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
