class Umbrella{
    constructor(x,y,radius){
        var options ={
            isStatic : true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = 40;
        this.image = loadImage("walking_1.png");
       
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        ellipseMode(RADIUS);
        fill("black");
        ellipse(pos.x, pos.y, this.radius);
        this.image.scale = 0.5;
        image(this.image, 50, 315, 150, 200);
        pop();
    }
}