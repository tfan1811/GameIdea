const KEYS = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  SPACE: 32,
};

/*
 * Adds key listeners to the game (canvas)
 */
export class KeyboardEvents {
  constructor(canvas) {
    this._canvas = canvas;
  }

  listen() {
    window.addEventListener('keypress', this._windowHandleKeyPress);
    this._canvas.addEventListener('keypress', this._handleKeyPress);
    this._canvas.addEventListener('click', this._handleClick);
  }

  unlisten() {
    window.removeEventListener('keypress', this._windowHandleKeyPress);
    this._canvas.removeEventListener('keypress', this._handleKeyPress);
    this._canvas.removeEventListener('click', this._handleClick);
  }

  _windowHandleKeyPress(e) {
    const keyCode = e.keyCode;
    console.log(keyCode);
    if (keyCode === KEYS.UP || keyCode === KEYS.DOWN || keyCode === KEYS.LEFT || keyCode === KEYS.RIGHT) {
      e.preventDefault();
    } else if (keyCode === KEYS.SPACE) {
      e.preventDefault();
    }
  }

  _handleKeyPress(e) {
    const keyCode = e.keyCode;
    console.log(keyCode);
  }

  _handleClick(e) {
    console.log('click!', e);
  }
}
