Engine = Matter.Engine;
World = Matter.World;
Bodies = Matter.Bodies;
Constraint = Matter.Constraint;


var engine, world;



function setup() {
createCanvas(800,400);

engine = Engine.create();
world = engine.world;

log = new Log(350,150,200,20);
bob = new Bob (350,350);
pendulum = new Pendulum(bob.body,{x:350,y:150});


}

function draw() {
background("pink");  
Engine.update(engine);

log.display();
pendulum.display();
bob.display();

textSize(20);
text("press up arrow key to move the pendulum",200,100 );

textSize(20);
text("press down arrow key to bring the pendulum back",200,50);

}


