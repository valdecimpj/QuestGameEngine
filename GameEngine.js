import Processor from './Implementation/Processor.js';
import Screen from './Implementation/Screen.js';

import Scene from './Model/Scene.js';
import DataLoadingTracker from './model/DataLoadingTracker.js';

import SceneService from './Service/SceneService.js';

export default class GameEngine{
    
    processor;
    scene;
    screen;
    canvas;

    
    constructor(canvas){
        this.canvas=canvas;
        this.setupGameEngine()
    }

    setupGameEngine(){
        try {
            CL3D 
        } catch (error) {
            alert("This engine requires CopperLicht\nhttps://www.ambiera.com/copperlicht")
            return;
        }
        this.scene = new Scene();
        this.processor = new Processor(this,true,this.scene);
        this.screen = new Screen(this.scene,true,this.canvas);
    }

    loadScene(scenePath){
        this.processor.stopProcessor();
        //não sei fazer isso mais educadamente
        SceneService.loadScene(scenePath,(loadedScene)=>{
            this.scene=loadedScene;
            let texturePathList=[];
            let scriptPathList=[];
            let dataLoadingTracker = new DataLoadingTracker();
            for(gameObject in scene.gameObjects){
                texturePathList=gameObject.data.texturePathPreloadList;
                for(gameObjectScript in gameObject.data.scripts)
                    scriptPathList.push(gameObjectScript.path);
            }
            dataLoadingTracker.textures.amountToLoad=texturePathList.length;
            dataLoadingTracker.scripts.amountToLoad=scriptPathList.length;
            //colocar isso em outro lugar T.T
            loadingEndedCheck=()=>{
                console.log(dataLoadingTracker);
                if(dataLoadingTracker.textures.amountToLoad==dataLoadingTracker.textures.amountLoaded
                    &&dataLoadingTracker.scripts.amountToLoad==dataLoadingTracker.scripts.amountLoaded){
                    this.startEngine();
                    alert("finished loading (remember to finish making loadscreen)");
                }else
                    setTimeout(()=>{loadingEndedCheck()},100);
            }
            loadingEndedCheck();
            this.processor.loadScriptList(scriptPathList,dataLoadingTracker);
            this.screen.preloadTextureList(texturePathList,dataLoadingTracker);
        })
    }

    startEngine(){
        this.processor.startProcessor();
        this.screen.startRender();
    }

    resetEngine(){
        this.setupGameEngine();
    }

    togglePauseProcessor(){
        if(this.processor.stop)
            this.processos.startProcessor();
        else
            this.processor.stopProcessor();
    }

    togglePauseRendering(){
        if(this.screen.stop)
            this.screen.startRender();
        else
            this.screen.stopRender();
    }
    setFramerate(framerate){
        this.processor.framerate=framerate;
    }
}