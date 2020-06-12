const  Engine = Matter.Engine, World = Matter.World, Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  box = Bodies.rectangle(200,200,20,40);
  World.add(world,box);
  

  ball = Bodies.circle(200,200,20);
  World.add(world,ball);

  var options = {isStatic: true}
  ground = Bodies.rectangle(400,380,800,20,options);
  World.add(world,ground);
  console.log(ground);
}

function draw() {
  Engine.update(engine);
  background(220);
  rect(box.position.x,box.position.y,20,40);
  ellipse(ball.position.x,ball.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
}

