export let preloader = function (el, time = '0.1') {
  this.init(el, time);
};

preloader.prototype = {
  constructor: preloader,

  init: function (el, time) {
    var _this = this;

    if (!_this._setVars(el)) return;
    _this._setEvents(time);
  },

  _setVars: function (el) {
    var _this = this;

    _this._preloader = el;
    if (!_this._preloader) return false;

    CSSPlugin;

    return true;
  },

  _setEvents: function (time) {
    var _this = this;

    //TweenLite.killTweensOf(_this._preloader);
    window.addEventListener('load', function () {
      TweenLite.to(_this._preloader, time, {
        autoAlpha: 0,
        onComplete: _this._cb,
        onCompleteParams: [_this]
      });
    }, false);
  },

  _cb: function (_this, time) {
    let afterLoad = setTimeout(function () {
      console.log('load complete');
      _this._preloader.remove();
    }, time);
    clearTimeout(afterLoad);
  }
};
