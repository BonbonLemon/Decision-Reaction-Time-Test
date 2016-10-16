var View = function () {
  this.bindEvents();
}

View.prototype.bindEvents = function () {
  window.onkeydown = function (e) {
    if ((e.keyCode == 32 || e.keyCode == 37 || e.keyCode == 38 ||
          e.keyCode == 39 || e.keyCode == 40) && e.target == document.body)
      {
        e.preventDefault();
        console.log("hey");
      }
  }
};

module.exports = View;
