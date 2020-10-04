
export class Screen {
    constructor(width, height, context) {
      this._width = width;
      this._height = height;
      this._context = context;
    }

    get width() {
      return this._width;
    }

    set width(width) {
      this._width = width;
    }

    get height() {
      return this._height;
    }

    set height(height) {
      this._height = height;
    }

    render() {
      // Draw a simple square
      this._context.fillStyle = '#818181';
      this._context.fillRect(0, 0, this._width, this._height);
    }
}
