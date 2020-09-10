const Engine = Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground, ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic:true
  }

  var ball_options = {
restitution:1

  }
  ground = Bodies.rectangle(200,375,400,50,options);
  World.add(world,ground);
  ball = Bodies.circle(200,100,25,ball_options);
  World.add(world,ball)
  console.log(ball);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  fill (rgb(210,105,30));
  rect(ground.position.x,ground.position.y,400,50);
  ellipse(ball.position.x,ball.position.y,25,25);

  
}