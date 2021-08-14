
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground;
var box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 100, 20)

	ground = new Ground(400, 650, 800, 30)

	box1 = new Box(600, 580, 10, 100)
	box2 = new Box(750, 580, 10, 100)
	box3 = new Box(680, 630, 150, 10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
 
}

function keyPressed(){

	if(keyCode === 32){

		Matter.Body.applyForce(paper.body, paper.body.position, {

			x: 50,
			y: -80
		})
	}
}

