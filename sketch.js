const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(150, 305, 300, 170);
    platform2 = new Ground(1000,170,270,10);
    bird = new Bird(200,50);
    box1 = new Box (900,150,20,40);
    box2 = new Box (920,150,20,40);
    box3 = new Box (940,150,20,40);
    box4 = new Box (960,150,20,40);
    box5 = new Box (980,150,20,40);
    box6 = new Box (1000,150,20,40);
    box7 = new Box(915,110,20,40);
    box8 = new Box(935,110,20,40);
    box9 = new Box(955,110,20,40);
    box10 = new Box(975,110,20,40);
    box11 = new Box(935,70,20,40);
    box12 = new Box(955,70,20,40);
    box13 = new Box(945,30,20,40);
    box14 = new Box (600,360,20,40);
    box15= new Box (620,360,20,40);
    box16 = new Box (640,360,20,40);
    box17= new Box (660,360,20,40);
    box18 = new Box (680,360,20,40);
    box19= new Box (700,360,20,40);
    box20= new Box(615,310,20,40);
    box21 = new Box(635,310,20,40);
    box22= new Box(655,310,20,40);
    box23 = new Box(675,310,20,40);
    box24 = new Box(635,170,20,40);
    box25 = new Box(655,170,20,40);
    box26 = new Box(645,130,20,40);
     slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    bird.display();
    platform1.display();
    platform2.display();
    slingshot.display();  
    box1.display ();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display ();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();


}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}