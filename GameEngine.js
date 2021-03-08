import Processor from './Implementation/Processor.js';
import Screen from './Implementation/Screen.js';

import Scene from './Model/Scene.js';
import DataLoadingTracker from './Model/DataLoadingTracker.js';

import SceneService from './Service/SceneService.js';
import Keyboard from './Implementation/Keyboard.js';

export default class GameEngine{
    
    processor;
    scene;
    screen;
    canvas;
    loading;
    dataLoadingTracker;
    engineRootPath;
    keyboard;

    
    constructor(canvas,engineRootPath){
        this.canvas=canvas;
        this.engineRootPath=engineRootPath;
        if(this.engineRootPath[this.engineRootPath.length-1]!="/")
            this.engineRootPath+="/";
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
        this.keyboard=new Keyboard(this.screen);
        this.loading=false;
        this.dataLoadingTracker=new DataLoadingTracker()
    }

    getSceneScriptList(scene){
        let scriptPathList=[];
        for(let gameObjectIndex in scene.gameObjects){
            let gameObject = scene.gameObjects[gameObjectIndex];
            for(let gameObjectScriptIndex in gameObject.data.scripts)
                    scriptPathList.push(gameObject.data.scripts[gameObjectScriptIndex].path);
        }
        return scriptPathList;
    }

    getScenePreloadTexturePath(scene){
        let texturePathList=[];
        for(let index in scene.gameObjects){
            let gameObject = scene.gameObjects[index];
            texturePathList=gameObject.data.texturePathPreloadList;
        }
        return texturePathList;
    }

    loadScene(scenePath){
        alert("TODO GameEngine.loadScene!!")
    }

    loadingEndedCheck(){
        if(this.dataLoadingTracker.textures.amountToLoad==this.dataLoadingTracker.textures.amountLoaded
            &&this.dataLoadingTracker.scripts.amountToLoad==this.dataLoadingTracker.scripts.amountLoaded){
            this.loading=false;
            this.setupScene();
            console.log("finished loading (remember to finish making loadscreen)");
        }else
            setTimeout(()=>{this.loadingEndedCheck()},100);
    }

    loadSceneDependencies(){
        this.restartScreen();
        this.loading=true;
        let texturePathList=this.getScenePreloadTexturePath(this.scene);
        let scriptPathList=this.getSceneScriptList(this.scene);
        this.dataLoadingTracker = new DataLoadingTracker();
        this.dataLoadingTracker.textures.amountToLoad=texturePathList.length;
        this.dataLoadingTracker.scripts.amountToLoad=scriptPathList.length;
        this.processor.loadScriptList(scriptPathList,this.dataLoadingTracker);
        this.screen.preloadTextureList(texturePathList,this.dataLoadingTracker);
        this.loadingEndedCheck()
    }

    setupScene(){
        this.processor.setupScene()
    }

    startProcessor(){
        if(this.loading)
            alert("Loading!!!!");
        else
            this.processor.startProcessor();
    }

    stopProcessor(){
        this.processor.stopProcessor();
    }

    startScreen(){
        this.screen.startRender();
    }

    stopScreen(){
        this.screen.stopRender();
    }

    restartScreen(){
        this.screen.restartScreen();
    }

    startEngine(){
        if(this.loading)
            alert("Loading!!!!");
        else{
            this.processor.loadScriptList()
            this.processor.startProcessor();
            this.screen.startRender();
        }
    }

    resetEngine(){
        if(this.loading)
            alert("Loading!!!!")
        else
            this.setupGameEngine();
    }

    setFramerate(framerate){
        this.processor.framerate=framerate;
    }
}