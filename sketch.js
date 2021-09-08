
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;
var box1;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);

  

	engine = Engine.create();
  world = engine.world;
  
  var abc={
		restitution:3
	}

	//Create the Bodies Here.
  

  
  
  Engine.run(engine);
  
  
  ground = new Ground (800,650,1600,10,{isStatic:true});
  paper = new Paper (60,40,10);

  box1=new Dustbin(width/2,585,100,120,{isStatic:true});
  

  

}


function draw() {

  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
paper.display();
ground.display();
box1.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:18,y:-18});
 }
}

