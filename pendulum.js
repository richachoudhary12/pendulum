class Pendulum {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.pendulum = Constraint.create(options);
       // World.add(world, this.pendulum);
    }

    display(){
        if (this.pendulum.bodyA) {

        
        var pointA = this.pendulum.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }
    
}