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
        this.frameDelayMS=1000/34;
        this.previousTime=0;
    }

    loadScriptList(scriptPathList,dataLoadingTracker){
        for(let scriptPathIndex in scriptPathList){
            let scriptPath=scriptPathList[scriptPathIndex];
            let fullPath = this.gameEngine.engineRootPath+"Data/Script/"+scriptPath;
            ScriptService.loadScript(fullPath,(loadedScript)=>{
                this.scriptList[scriptPath]=loadedScript;
                dataLoadingTracker.scripts.amountLoaded++;
            })
        }
    }

    setupScene(){
        for(let gameObjectIndex in this.scene.gameObjects){
            let gameObject=this.scene.gameObjects[gameObjectIndex];
            for(let scriptIndex in gameObject.data.scripts){
                let script = gameObject.data.scripts[scriptIndex];
                this.setupScript(script,gameObject)
            }
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
        let fps = 1/(startTime-this.previousTime)*1000;
        this.previousTime=startTime;
        for(let gameObjectIndex in this.scene.gameObjects){
            let gameObject=this.scene.gameObjects[gameObjectIndex];
            for(let scriptIndex in gameObject.data.scripts){
                let script = gameObject.data.scripts[scriptIndex];
                this.runScript(script,gameObject)
            }
        }
        let timeProcessing=Date.now()-startTime;
        if(startTime%10==0)
            console.log("CPU Time: "+timeProcessing+"ms\nFPS: "+fps);
        let timeUntilNextFrame = this.frameDelayMS-timeProcessing;
        if(timeUntilNextFrame<0)
            timeUntilNextFrame=0;
        if(!this.stop)
            setTimeout(()=>{this.processScene()},timeUntilNextFrame);
    }

    setupScript(script,gameObject){
        this.scriptList[script.path].setupObject(gameObject,this.scene,this.gameEngine,script.scriptConfig);
    }

    runScript(script,gameObject){
        this.scriptList[script.path].processObject(gameObject,this.scene,this.gameEngine,script.scriptConfig);
    }
}