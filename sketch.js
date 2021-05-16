const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block13, block15,
    block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27,
    block28, block29, block30, block31, block32;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(720,200,250,10);

  polygon = new Polygon(150,200,30,30);
  slingShot = new Slingshot(polygon.body,{x:150, y:110})

  //first level
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //second level
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //third level
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //fourth level
  block16 = new Block(390,155,30,40);

  //2nd stand first level
  block17 = new Block(630,175,30,40);
  block18 = new Block(660,175,30,40);
  block19 = new Block(690,175,30,40);
  block20 = new Block(720,175,30,40);
  block21 = new Block(750,175,30,40);
  block22 = new Block(780,175,30,40);
  block23 = new Block(810,175,30,40);
  
  //2nd stand second level
  block24 = new Block(660,150,30,40);
  block25 = new Block(690,150,30,40);
  block26 = new Block(720,150,30,40);
  block27 = new Block(750,150,30,40);
  block28 = new Block(780,150,30,40);

  //2nd stand third level
  block29 = new Block(690,100,30,40);
  block30 = new Block(720,100,30,40);
  block31 = new Block(750,100,30,40);

  //2nd stand fourth level
  block32 = new Block(720,50,30,40);

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  fill("grey");
  block16.display();

  fill("skyblue")
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  fill("pink")
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();

  fill("turquoise")
  block29.display();
  block30.display();
  block31.display();

  fill("grey");
  block32.display();

  polygon.display();
  slingShot.display();
}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()  {
  slingShot.fly()
}

function keyPressed()  {
  if(keyCode===32)  {
    Matter.Body.setPosition(polygon.body,{x:150, y:200})
    slingShot.attach(polygon.body);
  }

}