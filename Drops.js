class Drops {
    constructor(x, y){
        var options ={
            restitution:0.4,
            friction :0.1
        }
        this.body = Bodies.circle(x, y, 5,options);   
        this.r = 2;
        this.color = "#345eeb";
        this.body.lifetime = 20;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
}