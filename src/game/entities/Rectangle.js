import { GameObject } from './GameObject';

const WIDTH = 50;
const HEIGHT = 50;

export class Rectangle extends GameObject {
  constructor(context, x, y, vx, vy) {
    super(context, x, y, vx, vy);
    this._type = 'Rectangle';
  }

  render() {
    // Draw a simple square
    this._context.fillStyle = this.isColliding ? '#EDDE24' : '#818181';
    this._context.fillRect(this.x, this.y, WIDTH, HEIGHT);
  }

  update(timePassed) {
    // Move with a set velocity
    this.x += this.vx * timePassed;
    this.y += this.vy * timePassed;

    console.log(this.x, this.y);
    if (this.x > 800 && this.y > 600) {
      this.x = 0;
      this.y = 0;
    }
  }
}
