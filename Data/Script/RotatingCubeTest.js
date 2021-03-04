class {
    static defaultScriptParameters={
        texturePath:"marioblock.jpg",
        posX:"0",
        posY:"0",
        posZ:"0",
        rotSpeedX:"0",
        rotSpeedY:"0.5",
        rotSpeedZ:"0",
    };

    static setupObject(gameObject,scene,gameEngine,scriptParameters){
        gameObject.copperObject=new CL3D.CubeSceneNode();
        gameEngine.screen.copperScene.getRootSceneNode().addChild(gameObject.copperObject);
        gameObject.copperObject.getMaterial(0).Tex1 = gameEngine.screen.copperlicht.getTextureManager().getTexture(gameEngine.engineRootPath+"Data/Texture/"+scriptParameters.texturePath, true);
    }

    static processObject(gameObject,scene,gameEngine,scriptParameters){
        gameObject.copperObject.Rot.X+=parseFloat(scriptParameters.rotSpeedX);
        gameObject.copperObject.Rot.Y+=parseFloat(scriptParameters.rotSpeedY);
        gameObject.copperObject.Rot.Z+=parseFloat(scriptParameters.rotSpeedZ);
    }
}