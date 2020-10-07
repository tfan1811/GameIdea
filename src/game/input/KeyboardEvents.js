import _ from 'lodash';

const KEYS = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  SPACE: 32,
  W: 119,
  A: 97,
  S: 115,
  D: 100,
};

/*
 * Adds key listeners to the game (canvas)
 */
export class KeyboardEvents {
  constructor(canvas) {
    _.bindAll(this, '_handleKeyUp', '_handleKeyDown', '_handleClick');
    this._canvas = canvas;

    this._keys = {};
    this._up = false;
    this._down = false;
    this._left = false;
    this._right = false;
  }

  update() {
    this.up = this._keys[KEYS.UP] || this._keys[KEYS.W];
    this.down = this._keys[KEYS.DOWN] || this._keys[KEYS.S];
    this.left = this._keys[KEYS.LEFT] || this._keys[KEYS.A];
    this.right = this._keys[KEYS.RIGHT] || this._keys[KEYS.D];
  }

  listen() {
    window.addEventListener('keydown', this._handleKeyDown);
    window.addEventListener('keyup', this._handleKeyUp);
    this._canvas.addEventListener('click', this._handleClick);
  }

  unlisten() {
    window.removeEventListener('keydown', this._handleKeyDown);
    window.removeEventListener('keyup', this._handleKeyUp);
    this._canvas.removeEventListener('click', this._handleClick);
  }

  _handleKeyDown(e) {
    console.log('down');
    const keyCode = e.keyCode;
    this._keys[keyCode] = true;
  }

  _handleKeyUp(e) {
    console.log('up');
    const keyCode = e.keyCode;
    this._keys[keyCode] = false;
  }

  _handleClick(e) {
    console.log('click!', e);
  }

  // Getters and setters

  get up() {
    return this._up;
  }

  set up(up) {
    this._up = up;
  }

  get down() {
    return this._down;
  }

  set down(down) {
    this._down = down;
  }

  get left() {
    return this._left;
  }

  set left(left) {
    this._left = left;
  }

  get right() {
    return this._right;
  }

  set right(right) {
    this._right = right;
  }
}
