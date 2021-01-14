const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella;
var drops = [];
var maxDrops = 250;
var lightning1, lightning2, lightning3, lightning4;

function preload(){
    lightning1 = loadImage("proc41images/images/thunderbolt/1.png");
    lightning2 = loadImage("proc41images/images/thunderbolt/2.png");
    lightning3 = loadImage("proc41images/images/thunderbolt/3.png");
    lightning4 = loadImage("proc41images/images/thunderbolt/4.png");
}

function setup(){
    createCanvas(250, 500);
    engine = Engine.create();
    world = engine.world;   
    
    umbrella = new Umbrella(125, 350, 10);
    umbrella.scale = 0.5
}

function draw(){
    background(0);
    Engine.update(engine);
    
    thunderbolt();

    drawSprites();
    umbrella.display();

    if(frameCount % 2 === 0){
        for(var u = 00; u <= width; u = u+random(1,50)){
            drops.push(new Drops(u,random(1,50)));
        };
    }  

    for(var u = 0; u <drops.length; u++){
        drops[u].display();
    }
   
}   

function thunderbolt(){
    if (frameCount% 100 === 0){
        var lightning = createSprite(random(1,200),30,10,10);
        lightning.scale = 0.3;

        var rand = Math.round(random(1,4));
        switch(rand) {
        case 1: lightning.addImage(lightning1);
                break;
        case 2: lightning.addImage(lightning2);
                break;
        case 3: lightning.addImage(lightning3);
                break;
        case 4: lightning.addImage(lightning4);
                break;
        default: break;
        }

        lightning.lifetime = 10;
    }
}
