var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

//1--form.js criar elementos de classe

function preload() {
  bgImg = loadImage("");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  
  //adicionar função de estado
  game.start();
  

}

function draw() {
  background(0)
  
  //adicionar condição de mudança de estado
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
