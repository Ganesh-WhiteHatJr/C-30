const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var block17, block18, block19, block20, block21, block22, block23, block24, block25;
var background,ground;
var ball, slingShot;



function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(450, 390, 900, 20);
    stand1 = new Stand(390, 300, 250, 10);
    stand2 = new Stand(700, 200, 200, 10);
    ball = new Ball(100, 200, 50);
    slingshot = new SlingShot(ball.body,{x:100, y:200});
    //2nd tower
    //level 4
    block1= new Blocks(300, 235, 30, 40);
    block2= new Blocks(330, 235, 30, 40);
    block3= new Blocks(360, 235, 30, 40);
    block4= new Blocks(390, 235, 30, 40);
    block5= new Blocks(420, 235, 30, 40);
    block6= new Blocks(450, 235, 30, 40);
    block7= new Blocks(480, 235, 30, 40);
    //level 3
    block8= new Blocks(330, 195, 30, 40);
    block9= new Blocks(360, 195, 30, 40);
    block10= new Blocks(390, 195, 30, 40);
    block11= new Blocks(420, 195, 30, 40);
    block12= new Blocks(450, 195, 30, 40);
    //level 2
    block13= new Blocks(360, 155, 30, 40);
    block14= new Blocks(390, 155, 30, 40);
    block15= new Blocks(420, 155, 30, 40);
    //level 1
    block16= new Blocks(390, 135, 30, 40);
    //1st tower 
    //level 3
    block17= new Blocks(640, 135, 30, 40);
    block18= new Blocks(670, 135, 30, 40);
    block19= new Blocks(700, 135, 30, 40);
    block20= new Blocks(730, 135, 30, 40);
    block21= new Blocks(760, 135, 30, 40);
    //level 2
    block22= new Blocks(670, 105, 30, 40);
    block23= new Blocks(700, 105, 30, 40);
    block24= new Blocks(730, 105, 30, 40);
    //level 1
    block25= new Blocks(700, 75, 30, 40);
}


function draw(){
    background("#654321");
    Engine.update(engine);
    textSize(25);
    fill("red");
    text("Drag the Hexagonal Stone and Release it to launch it towards the blocks", 30, 30);

    
    
    ground.display();
    stand1.display();
    stand2.display();
    ball.display();
    slingshot.display();
    //2nd tower 
    //level 4   
    fill("lightblue");
    block1.display();   
    fill("lightblue");
    block2.display();   
    fill("lightblue");
    block3.display();   
    fill("lightblue");
    block4.display();  
    fill("lightblue");
    block5.display();  
    fill("lightblue");
    block6.display();
    fill("lightblue");
    block7.display();
    //level 3
    fill("pink");
    block8.display();
    fill("pink");
    block9.display();
    fill("pink");
    block10.display();
    fill("pink");
    block11.display();
    fill("pink");
    block12.display();
    //level 2
    fill("lightgreen");
    block13.display();
    fill("lightgreen");
    block14.display();
    fill("lightgreen");
    block15.display();
    //level 1
    fill("grey");
    block16.display();
    //1st tower 
    //level 3
    fill("lightblue");
    block17.display();
    fill("lightblue");
    block18.display();
    fill("lightblue");
    block19.display();
    fill("lightblue");
    block20.display();
    fill("lightblue");
    block21.display();
    //level 2
    fill("lightgreen");
    block22.display();
    fill("lightgreen");
    block23.display();
    fill("lightgreen");
    block24.display();
    //level 1
    fill("pink");
    block25.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
