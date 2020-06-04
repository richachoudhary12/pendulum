class Bob{
constructor(x, y, radius, angle) {
var options = {
'restitution':0.8,
'friction':1.0,
'density':1.0
}
this.body = Bodies.circle(x, y,20, options);
this.radius = radius;

// World.add(world, this.body);

}
display(){
var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
fill("purple");
ellipseMode(CENTER);
ellipse( 0, 0, this.radius);
pop();

if (keyDown(UP_ARROW)){
this.body.position.x = mouseX;
this.body.position.y = mouseY;
}
if (keyDown(DOWN_ARROW)){
this.body.position.x = 350;
this.body.position.y = 350;
}
}
}