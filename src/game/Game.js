import _ from 'lodash';
import { Screen } from './graphics/Screen';
import { KeyboardEvents } from './input/KeyboardEvents';

const DIMENSIONS = {
  width: 800,
  height: 600,
};

/**
 * Base class that creates the game
 * @public
 */
export class Game {
  constructor(props, canvas, context) {
    this._width = props.width || DIMENSIONS.width;
    this._height = props.height || DIMENSIONS.height;
    this._canvas = canvas;
    this._context = context;

    this._running = false;

    this._keyboardListener = new KeyboardEvents(this._canvas);

    this._checkProps();
  }

  _checkProps() {
    if (_.isUndefined(this._width) || this._width === 0) {
      throw new Error(`Invalid width value given, got ${this._width}`)
    }

    if (_.isUndefined(this._height) || this._height === 0) {
      throw new Error(`Invalid width value given, got ${this._height}`)
    }

    if (_.isUndefined(this._canvas)) {
      throw new Error('No canvas was passed in');
    }

    if (_.isUndefined(this._context)) {
      throw new Error('No context was passed in');
    }
  }

  start(onComplete = _.noop) {
    //Maybe preloading stuff here
    this._running = true;

    this._screen = new Screen(this._width, this._height, this._context);
    this._keyboardListener.listen();

    onComplete();
  }

  stop(onComplete = _.noop) {
    // Maybe unlisten events here?
    this._running = false;

    this._keyboardListener.unlisten();

    onComplete();
  }

  tick() {
    if (this._running) {
      this.update();
    }
  }

  update() {
    this._screen.update();
    this._keyboardListener.update();

    if (this._keyboardListener.up) {
      this._screen.worldY--;
    }
    if (this._keyboardListener.down) {
      this._screen.worldY++;
    }
    if (this._keyboardListener.left) {
      this._screen.worldX--;
    }
    if (this._keyboardListener.right) {
      this._screen.worldX++;
    }
  }

  render() {
    if (this._running) {
      // We want to start each render call by clearing everything and redraw it
      this._screen.clear();

      // Render the screen
      this._screen.render();
    }
    // this.stop();
  }
}
