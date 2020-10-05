import { Game } from './game/Game';

const props = {
  width: 1024,
  height: 768,
};

let canvas;
let context;
let game;

// tick-rate related stuff
const tickRate = 60;
const tickInterval = 1000 / tickRate;
let now;
let then;
let elapsed;

// tick-rate debugging
// let startTime;
// let tickCount = 0;

// FPS related stuff
// let timer;
// let frames = 0;

window.onload = init;

function init() {
  // Create a canvas element and add it to the DOM Tree
  canvas = document.createElement('canvas');
  canvas.id = 'game';
  canvas.width = props.width;
  canvas.height = props.height;
  canvas.tabindex = '1';
  canvas.focus();
  context = canvas.getContext('2d');
  document.body.appendChild(canvas);

  game = new Game(props, canvas, context);

  // The first request for the game loop
  const startGameLoop = () => {
    // For FPS
    then = window.performance.now();
    // timer = window.performance.now();
    // startTime = then;

    // The first frame of the game loop
    window.requestAnimationFrame(gameLoop);
  };

  // Start the game (this will eventually include pre-loading, maybe)
  game.start(startGameLoop);
}

function gameLoop(timeStamp) {
  // Calculate the time passed
  now = timeStamp;
  elapsed = now - then;

  if (elapsed > tickInterval) {
    // Get ready for the next frame by setting then = now, but
    // also adjust for fpsInterval not being multiple of 16.67
    then = now - (elapsed % tickInterval);

    // Debugging tickRate
    // let sinceStart = now - startTime;
    // const ups = Math.round(1000 / (sinceStart / ++tickCount) * 100) / 100;
    // console.log(`ups: ${ups}`);

    game.tick();
  }
  game.render();

  // Debugging fps
  // frames++;
  // if (window.performance.now() - timer > 1000) {
  //   timer += 1000;
  //   console.log(`FPS: ${frames}`);
  //   frames = 0;
  // }

  window.requestAnimationFrame(gameLoop);
}
