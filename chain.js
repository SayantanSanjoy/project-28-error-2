class string{

constructor(bodyA,bodyB){


var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.4,
length:10

}


this.chain = Constraint.create(options);
World.add(world,this.chain)


}

fly(){

this.chain.bodyA=null;
this.chain.bodyB=null;

}
display(){

if(this.chain.bodyA,this.chain.bodyB){

    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position
    strokwidth(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
 

}





}












}
