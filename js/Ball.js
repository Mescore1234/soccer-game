class Ball {
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0.5
        
        }
        this.r= 50
        this.speed = 0.05
        this.body =Bodies.circle(x,y,this.r,options)
        this.image = loadImage("assets/ball.png")
        World.add(world, this.body);
    }

    animate(){
        this.speed+=0.05
    }
    
    display() {
        
        var pos = this.body.position;
       
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    
    
        
    }
}
    
    
