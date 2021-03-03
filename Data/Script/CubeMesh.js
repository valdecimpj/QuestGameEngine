class {
    static defaultScriptConfig={
        scriptParameters:[
            {
                name:"parameter1",
                value:"value1"
            }
        ]
    };

    static setupObject(gameObject,scene,gameEngine,scriptConfig){
        gameObject.copperObject=new CL3D.CubeSceneNode();
        gameEngine.screen.copperScene.getRootSceneNode().addChild(gameObject.copperObject);
        gameObject.copperObject.getMaterial(0).Tex1 = gameEngine.screen.copperlicht.getTextureManager().getTexture(gameEngine.engineRootPath+"Data/Texture/marioblock.jpg", true);
    }

    static processObject(gameObject,scene,gameEngine,scriptConfig){
        gameObject.copperObject.Rot.Y+=0.5;
    }
}