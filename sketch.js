const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var hero,monster,attach,block;

function preload()
{
	backgroundImage = loadImage("background.png");
}

function setup() {
	createCanvas(1400,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (600, 600, 1200, 5);
  hero= new Hero(400,3,100,100);
  attach=new Rope(hero.body,{x:100,y:465});
  block1 = new Box(600,200,50,50);  
  block2 = new Box(600,200,50,50);
  block3 = new Box(600,200,50,50);
  block4 = new Box(600,200,50,50);
  block5 = new Box(600,200,50,50);
  block6 = new Box(800,200,50,50);
  block7 = new Box(800,200,50,50);
  block8 = new Box(800,200,50,50);
  block9 = new Box(800,200,50,50);
  block10 = new Box(700,200,50,50);
  block11 = new Box(700,200,50,50);
  block12 = new Box(700,200,50,50);
  block13 = new Box(700,200,50,50);
  block14 = new Box(700,200,50,50);
  block15 = new Box(800,200,50,50);  
  block16= new Box(800,200,50,50);
  block17= new Box(800,200,50,50);
  block18= new Box(900,200,50,50);
  block19= new Box(900,200,50,50);
  block20= new Box(900,200,50,50);
  block21= new Box(900,200,50,50);
  block22= new Box(900,200,50,50);
  block23= new Box(900,200,50,50);
  block24 = new Box(900,200,50,50);
  block25 = new Box(900,200,50,50);
  block26 = new Box(700,200,50,50);
  monster = new Monster(1000,200,100,100);
  
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  
   hero.display();
  ground.display();
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  monster.display();
  
 
}
function mouseDragged(){
	Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}
