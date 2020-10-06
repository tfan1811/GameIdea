import _ from 'lodash';
const TILE_SIZE = 32;
const MAP_SIZE = 64;

/*
 * The main class for rendering things
 */
export class Screen {
    constructor(width, height, context) {
      this._width = width;
      this._height = height;
      this._context = context;

      // For drawing the world map
      this._worldX = (MAP_SIZE / 2) * TILE_SIZE;
      this._worldY = (MAP_SIZE / 2) * TILE_SIZE;
      this._worldDirection = Math.PI / 4;

      this._tiles = [];
      this._assignRandomColors();
    }

    clear() {
      this._context.clearRect(0, 0, this._width, this._height);
    }

    render() {
      const topLeftX = this._worldX / TILE_SIZE | 0;
      const topLeftY = this._worldY / TILE_SIZE | 0;
      const numTilesVisibleWidth = (this._width / TILE_SIZE | 0) + 2;
      const numTilesVisibleHeight = (this._height / TILE_SIZE | 0) + 2;
      // console.log(this._context);
      // console.log(this._width, this._height);
      // console.log(topLeftX, topLeftY);
      // console.log(numTilesVisibleWidth, numTilesVisibleHeight);
      // console.log('tileIndex:', topLeftX + 0 + (topLeftY + 0) * MAP_SIZE);
      // console.log(this._tiles.length);
      // console.log('would be x and y:');
      // console.log((topLeftX + 0) * TILE_SIZE, (topLeftY + 0) * TILE_SIZE);

      // Set the location
      this._context.setTransform(1, 0, 0, 1, Math.floor(-this._worldX), Math.floor(-this._worldY));

      // Draw the tiles
      for (let y = 0; y < numTilesVisibleHeight; y++) {
        for (let x = 0; x < numTilesVisibleWidth; x++) {
          const tileIndex = (topLeftX + x) + (topLeftY + y) * MAP_SIZE;
          const color = _.isUndefined(this._tiles[tileIndex]) ? '#000' : this._tiles[tileIndex];
          this._context.fillStyle = color;
          this._context.fillRect(
            (topLeftX + x) * TILE_SIZE,
            (topLeftY + y) * TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE
          );
        }
      }

      // just saving for later in case anything absolutely breaks
      // for (let y = 0; y < 20; y++) {
      //   for (let x = 0; x < 20; x++) {
      //     const tileIndex = x + y * 20;
      //     this._context.fillStyle = this._tiles[tileIndex];
      //     this._context.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      //   }
      // }
    }

    update() {
      // this._worldX += Math.cos(this._worldDirection) * 3;
      // this._worldY += Math.sin(this._worldDirection) * 3;
    }

    _assignRandomColors() {
      for (let i = 0; i < MAP_SIZE * MAP_SIZE; i++) {
        this._tiles[i] = `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`
      }
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

    get worldX() {
      return this._worldX;
    }

    set worldX(worldX) {
      this._worldX = worldX;
    }

    get worldY() {
      return this._worldY;
    }

    set worldY(worldY) {
      this._worldY = worldY;
    }
}
