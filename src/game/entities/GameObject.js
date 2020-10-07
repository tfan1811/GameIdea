export class GameObject {
  /**
   * Base class for all game objects
   * @param {canvas.context} context - The context object to draw with
   * @param {integer} x - the x value of the game object
   * @param {integer} y - the y value of the game object
   * @param {integer} vx - the vx value of the game object (horizontal velo)
   * @param {integer} vy - the vy value of the game object (vertical velo)
   */
  constructor(context, x = 0, y = 0, vx = 0, vy = 0) {
    this._context = context;
    this._x = x;
    this._y = y;
    this._vx = vx;
    this._vy = vy;

    // Generic properties for all objects
    this._type = null;
    this._isColliding = false;
  }

  // Getters and setters
  get x() {
    return this._x;
  }

  set x(x) {
    this._x = x;
  }

  get y() {
    return this._y;
  }

  set y(y) {
    this._y = y;
  }

  get vx() {
    return this._vx;
  }

  set vx(vx) {
    this._vx = vx;
  }

  get vy() {
    return this._vy;
  }

  set vy(vy) {
    this._vy = vy;
  }

  get type() {
    return this._type;
  }

  set type(type) {
    this._type = type;
  }

  get isColliding() {
    return this._isColliding;
  }

  set isColliding(isColliding) {
    this._isColliding = isColliding;
  }
}
