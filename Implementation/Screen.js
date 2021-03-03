
export default class Screen{
    scene;
    pauseOnError;
    stop;
    canvasId;
    copperlicht;
    copperScene;

    constructor(scene,pauseOnError,canvasId){
        this.scene=scene;
        this.pauseOnError=pauseOnError;
        this.canvasId=canvasId;
        this.setupRender();
    }

    setupRender(){
        this.stop=true;
        this.copperlicht=new CL3D.CopperLicht(this.canvasId);
        this.setupCopperScene();
    };

    setupCopperScene(){
        this.copperScene = new CL3D.Scene();
        this.copperlicht.addScene(this.copperScene);
        this.copperScene.setBackgroundColor(CL3D.createColor(1, 0, 0, 0));
        this.copperScene.setRedrawMode(CL3D.Scene.REDRAW_EVERY_FRAME);
    }

    restartScreen(){
        let nodes = this.copperScene.getAllSceneNodesOfType("mesh")
        for(let index in nodes){
            let node = nodes[index]
            node.getParent().removeChild(node);
        }
    }

    preloadTextureList(texturePathList,dataLoadingTracker){
        console.log("Todo Screen.preloadTextureList");
        //for(texturePath in texturePathList)
    }

    startRender(){
        if(!this.copperlicht.initRenderer())
            alert("Browser doesn't support WebGL!!");
        /*var skybox = new CL3D.SkyBoxSceneNode();
		this.copperScene.getRootSceneNode().addChild(skybox);
        console.log("asd")
        for (var i=0; i<6; ++i)
			skybox.getMaterial(i).Tex1 = engine.getTextureManager().getTexture("assets/QuestGameEngine/Data/Texture/crate_wood.jpg", true);*/
    }

    stopRender(){
        this.setupRender();
    }

}