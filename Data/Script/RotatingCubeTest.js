class {
    static defaultScriptConfig={
        scriptParameters:[
            {
                name:"TexturePath",
                value:"marioblock.jpg"
            },
            {
                name:"PosX",
                value:"0"
            },
            {
                name:"PosY",
                value:"0"
            },
            {
                name:"PosZ",
                value:"0"
            },
            {
                name:"RotSpeedX",
                value:"0"
            },
            {
                name:"RotSpeedY",
                value:"0.5"
            },
            {
                name:"RotSpeedZ",
                value:"0"
            },
        ]
    };

    static setupObject(gameObject,scene,gameEngine,scriptConfig){
        gameObject.copperObject=new CL3D.CubeSceneNode();
        gameEngine.screen.copperScene.getRootSceneNode().addChild(gameObject.copperObject);
        gameObject.copperObject.getMaterial(0).Tex1 = gameEngine.screen.copperlicht.getTextureManager().getTexture(gameEngine.engineRootPath+"Data/Texture/"+scriptConfig.scriptParameters[0].value, true);
    }

    static processObject(gameObject,scene,gameEngine,scriptConfig){
        gameObject.copperObject.Rot.X+=parseFloat(scriptConfig.scriptParameters[4].value);
        gameObject.copperObject.Rot.Y+=parseFloat(scriptConfig.scriptParameters[5].value);
        gameObject.copperObject.Rot.Z+=parseFloat(scriptConfig.scriptParameters[6].value);
    }
}