class {
    static defaultScriptParameters={
        posX:"10",
        posY:"10",
        posZ:"30",
        rotX:"0",
        rotY:"0",
        rotZ:"0",
    }

    static setupObject(gameObject,scene,gameEngine,scriptParameters){
        let cam = gameEngine.screen.copperCamera;
        cam.Pos.X=scriptParameters.posX;
        cam.Pos.Y=scriptParameters.posY;
        cam.Pos.Z=scriptParameters.posZ;
        cam.Rot.X=scriptParameters.rotX;
        cam.Rot.Y=scriptParameters.rotY;
        cam.Rot.Z=scriptParameters.rotZ;
    }

    static processObject(gameObject,scene,gameEngine,scriptParameters){

    }
}