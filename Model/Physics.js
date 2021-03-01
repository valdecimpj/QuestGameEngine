import Vector3D from "./Vector3D";

export default class Physics{
    position;
    velocity;
    acceleration;
    orientation;
    angularVelocity;
    angularAcceleration;

    constructor(){
        this.position=new Vector3D();
        this.velocity=new Vector3D();
        this.acceleration=new Vector3D();
        this.orientation=new Vector3D();
        this.angularVelocity=new Vector3D();
        this.angularAcceleration=new Vector3D();
    }
}