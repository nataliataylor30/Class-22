const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ball,ground
function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 var groundOP={isStatic:true};
 ground=Bodies.rectangle(200,380,400,20,groundOP);
 var ballOP={restitution:1};
 ball=Bodies.circle(200,200,40,ballOP);
 World.add(world,ground);
 World.add(world,ball)
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  strokeWeight(5);
  stroke("white");
  fill ("pink");
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  strokeWeight(5);
  stroke("yellow");
  fill ("orange");
  ellipse(ball.position.x,ball.position.y,40,40);
}