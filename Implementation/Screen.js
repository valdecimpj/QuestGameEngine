
export default class Screen{
    scene;
    pauseOnError;
    stop;
    canvas;
    copperlicht;
    copperScene;

    constructor(scene,pauseOnError,canvas){
        this.scene=scene;
        this.pauseOnError=pauseOnError;
        this.canvas=canvas;
        this.setupRender();
    }

    setupRender(){
        this.stop=true;

        if(this.canvas.id=="")
            this.canvas.id="canvas3d";
        this.copperlicht=new CL3D.CopperLicht(this.canvas.id);
        this.copperScene = new CL3D.Scene();

    };

    preloadTextureList(texturePathList,dataLoadingTracker){
        alert("Todo");
        for(texturePath in texturePathList)
            console.log("todo");
    }

    startRender(){
        if(!this.copperlicht.initRenderer())
            alert("Browser doesn't support WebGL!!");
        this.copperlicht.addScene(this.copperScene);
        this.copperScene.setRedrawMode(CL3D.Scene.REDRAW_WHEN_SCENE_CHANGED);
    }

    stopRender(){
        alert("THERE'S NOT STOPPING COPPERLICHT!!!! no.. really....")
    }

}