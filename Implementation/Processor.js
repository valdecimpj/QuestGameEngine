import ScriptService from '../Service/ScriptService.js';

export default class Processor{
    scene;
    scriptList;
    pauseOnError;
    stop;
    gameEngine;
    framerate;
    previousTime;

    constructor(gameEngine,pauseOnError,scene){
        this.gameEngine=gameEngine;
        this.pauseOnError=pauseOnError;
        this.scene=scene;
        this.setupProcessor();
    }

    setupProcessor(){
        this.scriptList=[];
        this.stop=true;
        this.frameDelayMS=1000/30;
        this.previousTime=0;
    }

    loadScriptList(scriptPathList,dataLoadingTracker){
        for(scriptPath in scriptPathList){
            ScriptService.loadScript(scriptPath,(loadedScript)=>{
                this.scriptList[scriptPath](loadedScript);
                dataLoadingTracker.scripts.amountLoaded++;
            })
        }
    }

    startProcessor(){
        this.stop=false;
        this.processScene();
    }

    stopProcessor(){
        this.stop=true;
    }

    processScene(){
        let startTime=Date.now();
        let fps = parseInt(1/(startTime-this.previousTime)*1000);
        this.previousTime=startTime;
        for(gameObject in this.scene.gameObjects)
            for(script in gameObject.data.scripts)
                this.runScript(script.path,gameObject)
        let timeProcessing=Date.now()-startTime;
        if(startTime%10==0)
            console.log("CPU Time: "+timeProcessing+"ms\nFPS: "+fps);
        let timeUntilNextFrame = this.frameDelayMS-timeProcessing;
        if(timeUntilNextFrame<0)
            timeUntilNextFrame=0;
        if(!this.stop)
            setTimeout(()=>{this.processScene()},timeUntilNextFrame);
    }

    runScript(scriptPath,gameObject){
        this.scriptList[scriptPath].processObject(gameObject,this.scene,this.gameEngine);
    }
}