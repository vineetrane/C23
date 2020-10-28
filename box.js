class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle; 
    // giving a new setting
     push() 
    translate(pos.x,pos.y)
     rotate (angle)
     rectMode(CENTER); 
    fill(255);
     rect(0,0, this.width, this.height); 
    // bringing back to old settings pop();
   
    pop();
  }
};
