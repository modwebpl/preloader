export let preloader = function (id, time = 0) {
  this.init(id, time);
};

preloader.prototype = {
  constructor: preloader,

  init: function (id, time) {
    var _this = this;

    if (!_this._setVars(id, time)) return;
    _this._setEvents(time);
  },

  _setVars: function (id, time) {
    var _this = this;

    let cbTime = time * 1000;

    _this._preloader = document.getElementById(id);
    if (!_this._preloader) return false;

    _this._tl = new TimelineLite({
      paused: true,
      onComplete: function () {
        setTimeout(function () {
          _this._preloader.innerHTML = '';
          //console.log('load complete')
        }, cbTime + 500);
        this.clear();
      }
    });
    CSSPlugin;

    return true;
  },

  _setEvents: function (time) {
    var _this = this;

    window.addEventListener('load', function () {
      _this._tl.play().to(_this._preloader, time, {autoAlpha: 0});
    }, false);
  }
};
