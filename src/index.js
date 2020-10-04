import _ from 'lodash';
import { Game } from './game/Game';

const props = {
  width: 1024,
  height: 768,
};

let canvas;
let context;
let game;

// FPS related stuff
let timePassed = 0;
let oldTimeStamp = 0;

window.onload = init;

function init() {
  // Create a canvas element and add it to the DOM Tree
  canvas = document.createElement('canvas');
  canvas.id = 'game';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context = canvas.getContext('2d');
  document.body.appendChild(canvas);

  console.log(document);
  game = new Game(props, canvas, context);

  // The first request for the game loop
  const startGameLoop = () => {
    // The first frame of the game loop
    window.requestAnimationFrame(gameLoop);
  };

  // Start the game (this will eventually include pre-loading, maybe)
  game.start(startGameLoop);
}

function gameLoop(timeStamp) {
  // Calculate the time passed
  timePassed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;

  game.tick(timePassed);
  window.requestAnimationFrame(gameLoop);
};
