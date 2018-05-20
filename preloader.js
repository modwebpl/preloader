export let preloader = function (el) {
  this.init(el);
};

preloader.prototype = {
  constructor: preloader,

  init: function (el) {
    var _this = this;

    if (!_this._setVars(el)) return;
    _this._setEvents();
  },

  _setVars: function (el) {
    var _this = this;

    _this._preloader = el;
    if (!_this._preloader) return false;

    CSSPlugin;

    return true;
  },

  _setEvents: function () {
    var _this = this;

    TweenLite.killTweensOf(_this._preloader);
    window.addEventListener('load', function () {
      TweenLite.to(_this._preloader, 0.1, {
        autoAlpha: 0,
        onComplete: _this._cb,
        onCompleteParams: [_this]
      });
    }, false);
  },

  _cb: function (_this) {

    setTimeout(function () {
      _this._preloader.remove();
      console.log('load complete');
    }, 500);
  }
};
