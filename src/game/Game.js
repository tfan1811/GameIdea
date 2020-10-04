import _ from 'lodash';
import { Screen } from './graphics/Screen';

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
    this._oldTimeStamp = 0;
    this._screen = null;

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

    onComplete();
  }

  stop(onComplete = _.noop) {
    // Maybe unlisten events here?
    this._running = false;
    this._screen = null;
    onComplete();
  }

  tick(timePassed) {
    if (this._running) {
      this.update(timePassed);
      this.render();
    }
  }

  update(timePassed) {
    this.square.update(timePassed);
  }

  render() {
    // We want to start each render call by clearing everything and redraw it
    this._clearCanvas();

    // Render the screen
    this._screen.render();
  }

  _clearCanvas() {
    this._context.clearRect(0, 0, this._width, this._height);
  }
}
