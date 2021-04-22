var canvas,backgroundImg;
var gamestate = 0;
var playercount;
var database;
var form,player,game;
var allplayers
var distance=0

function setup() {
 canvas =  createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
if(playercount===4){
  game.update(1)
}
if(gamestate===1){
  clear()
  game.play()
}
}