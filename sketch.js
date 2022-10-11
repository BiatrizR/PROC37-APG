var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

//1--form.js criar elementos de classe

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
