const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
 var bob;
 var bob2;
 var bob3;
 var bob4;
var bob5;
 var rope;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);

	 var op={
      restituition:0.9
	 }
	 bob=Bodies.circle(200,250,30,op);
	 World.add(world,bob);

	 bob2=Bodies.circle(120,250,30,op);
	 World.add(world,bob2);

	 bob3=Bodies.circle(200,200,30,op);
	 World.add(world,bob3);

	 bob4=Bodies.circle(200,200,30,op);
	 World.add(world,bob4);

	 bob5=Bodies.circle(200,200,30,op);
	 World.add(world,bob5);

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  
  
  //create ellipse shape for multiple bobs here
  ellipse(bob.position.x,bob.position.y,30);
   ellipse(bob2.position.x,bob2.position.y,30);
   ellipse(bob3.position.x,bob3.position.y,30);
   ellipse(bob4.position.x,bob4.position.y,30);
   ellipse(bob5.position.x,bob5position.y,30);

}
