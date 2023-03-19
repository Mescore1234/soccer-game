const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
var canvas;
var ground
var ball
var backgroundImage, player1runAnimation, player2runAnimation,net,net2,player1kickAnimation, player2kickAnimation
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var players = [];
var player1run,player2run

function preload() {
  backgroundImage = loadImage("assets/Background1.jpg");
  player1runAnimation = loadAnimation("assets/run.png","assets/run.png","assets/run.png","assets/walk.png","assets/walk.png","assets/walk.png")
  player2runAnimation = loadAnimation("assets/run2.png","assets/run2.png","assets/run2.png","assets/walk2.png","assets/walk2.png","assets/walk2.png")
  player1kickAnimation = loadAnimation("assets/run.png","assets/run.png","assets/run.png","assets/run.png","assets/run.png","assets/walk.png","assets/walk.png","assets/walk.png","assets/walk.png","assets/walk.png","assets/kick.png","assets/kick.png","assets/kick.png","assets/kick.png","assets/kick.png")
  player2kickAnimation = loadAnimation("assets/run2.png","assets/run2.png","assets/run2.png","assets/run2.png","assets/run2.png","assets/walk2.png","assets/walk2.png","assets/walk2.png","assets/walk2.png","assets/walk2.png","assets/kick2.png","assets/kick2.png","assets/kick2.png","assets/kick2.png","assets/kick2.png")
  net = loadImage("assets/net.png")
  net2 = loadImage("assets/net2.png")

  /*car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  lifeImage = loadImage("assets/life.png");
  blastImage = loadImage("assets/blast.png")
*/}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15

  ground = Bodies.rectangle(windowWidth/2, height - 10, windowWidth , 10, { isStatic: true });
  World.add(world, ground)
  ball = new Ball(width/2, height/2);

  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


}

function draw() {
  Engine.update(engine);

  push();
  translate(ground.position.x, ground.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  pop();
  

  background(backgroundImage);
  ball.display();
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
