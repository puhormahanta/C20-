
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var rock;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  rock = Bodies.circle(100,10,20,rock_options);
  World.add(world,rock);

  var ground_options ={
    isStatic: true
  };
 
  wall = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,wall)


  var ball_options = {
  isStatic: false,
  restitution: 1.10,

  }

   var rock_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   

  ground = Bodies.rectangle(200,390,380,20,ground_options);
  World.add(world,ground);

  rock = Bodies.circle(100,10,20,rock_options);
  World.add(world,rock);
  
  ball = Bodies.circle(200,10,30,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill("green")
  ellipse(rock.position.x,rock.position.y,20);
  fill("blue")
  rect(ground.position.x,ground.position.y,380,20);
  fill("yellow")
  ellipse(ball.position.x,ball.position.y,30,30)
  fill("red")
  rect(wall.position.x,wall.position.y,200,20)
}

