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
        let cam = new CL3D.CameraSceneNode();
		cam.Pos.X = 20;
        cam.Pos.Y = 15;
		
		gameEngine.screen.copperScene.getRootSceneNode().addChild(cam);
		gameEngine.screen.copperScene.setActiveCamera(cam);	
        console.log("cam setup")
    }

    static processObject(gameObject,scene,gameEngine,scriptConfig){

    }
}