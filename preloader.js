export class preloader {
  constructor(id, time = 0) {
  
    if (!this._setVars(id)) return;
    
    window.addEventListener('load', ()=> {
      TweenLite.to(this._preloader, time, {
      autoAlpha: 0, onComplete: this.destroy
    });
    }, false);
  }

  _setVars(id) {
  
    this._preloader = typeof id === 'string' ? document.body.getElementsByClassName(id)[0] : id;
    if (!this._preloader) return false;

    return true;
  }

  destroy() {
    
    setTimeOut(() => {
      if (!this._preloader || !this._preloader.parentNode) return;
      this._preloader.parentNode.removeChild(this._preloader);
    }, 100);
    
    for (const key in this) if (this.hasOwnProperty(key)) this[key] = null;
  }
}
