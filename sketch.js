const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon;

function setup(){
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(450,550,400,20);
    ground2 = new Ground(900,300,300,20);

    block1 = new BlueBlock(300,510);
    block2 = new BlueBlock(350,510);
    block3 = new BlueBlock(400,510);
    block4 = new BlueBlock(450,510);
    block5 = new BlueBlock(500,510);
    block6 = new BlueBlock(550,510);
    block7 = new BlueBlock(600,510);
    
    block8 = new PinkBlock(325,450);
    block9 = new PinkBlock(375,450);
    block10 = new PinkBlock(425,450);
    block11 = new PinkBlock(475,450);
    block12 = new PinkBlock(525,450);
    block13 = new PinkBlock(575,450);

    block14 = new GreenBlock(350,390);
    block15 = new GreenBlock(400,390);
    block16 = new GreenBlock(450,390);
    block17 = new GreenBlock(500,390);
    block18 = new GreenBlock(550,390);
    
    block19 = new BlueBlock(400,330);
    block20 = new BlueBlock(450,330);
    block21 = new BlueBlock(500,330);

    block22 = new PinkBlock(450,270);

    block23 = new BlueBlock(800,260);
    block24 = new BlueBlock(850,260);
    block25 = new BlueBlock(900,260);
    block26 = new BlueBlock(950,260);
    block27 = new BlueBlock(1000,260);

    block28 = new GreenBlock(850,200);
    block29 = new GreenBlock(900,200);
    block30 = new GreenBlock(950,200);

    block31 = new PinkBlock(900,140);

    polygon = new Polygon(120,300,60,20);
    World.add(world,polygon);

    slingShot = new SlingShot(polygon.body,{x:100,y:200});

    Engine.run(engine)
}

function draw(){
    background(0);

    ground.display();
    ground2.display();

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
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    block19.display();
    block20.display();
    block21.display();

    block22.display();

    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();

    block28.display();
    block29.display();
    block30.display();

    block31.display();

    polygon.display();
    slingShot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
