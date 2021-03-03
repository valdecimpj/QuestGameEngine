class {
    static defaultScriptConfig={
        scriptParameters:[
            {
                name:"PosX",
                value:"10"
            },
            {
                name:"PosY",
                value:"10"
            },
            {
                name:"PosZ",
                value:"30"
            },
            {
                name:"RotX",
                value:"0"
            },
            {
                name:"RotY",
                value:"0"
            },
            {
                name:"RotZ",
                value:"0"
            }
        ]
    };

    static setupObject(gameObject,scene,gameEngine,scriptConfig){
        let cam = gameEngine.screen.copperCamera;
        cam.Pos.X=scriptConfig.scriptParameters[0].value;
        cam.Pos.Y=scriptConfig.scriptParameters[1].value;
        cam.Pos.Z=scriptConfig.scriptParameters[2].value;
        cam.Rot.X=scriptConfig.scriptParameters[3].value;
        cam.Rot.Y=scriptConfig.scriptParameters[4].value;
        cam.Rot.Z=scriptConfig.scriptParameters[5].value;
    }

    static processObject(gameObject,scene,gameEngine,scriptConfig){

    }
}