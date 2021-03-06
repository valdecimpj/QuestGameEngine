# QuestGameEngine

QuestGameEngine is a **work in progress** WebGL game engine made using parts of [Copperlicht](https://www.ambiera.com/copperlicht/) for academic purposes.

## Usage

The engine's core, GameEngine.js can be imported in a javascript module file as follows:
```html
<script type="module">
  import GameEngine from 'assets/QuestGameEngine/GameEngine.js';
  let quest = new GameEngine('canvas3d','assets/');
</script>
```
## Summary

[GameEngine.js Documentation](#gameengine.js-documentation)<br/>
[Custom Scripts Creation](#custom-scripts-creation)<br/>
[Classes Reference](#classes-reference)

## GameEngine.js Documentation

GameEngine is QuestGameEngine's main class, can be used to operate the whole engine on it's own.

**Method** | **Parameters** | **Description**
--- | --- | ---
**GameEngine(canvasId:string,engineRootPath:string)** | **canvasId**: Id from canvas HTML element to be used as screen. <br/> **engineRootPath**: Path of the engine's root within the site. | Constructor for QuestGameEngine main class.
**loadScene(scenePath:string)** | **scene**: Path of a scene to load. | Loads a scene exported or created in QuestGameEngine/Data/Scene
**loadSceneDependencies()** | -- | Loads scripts and textures used in active loaded scene.
**setupScene()** | -- | Runs each script's [setupObject](#script-template) function for every game object that includes it.
**startProcessor()** | -- | Begins the execution every frame of script's [processObject](#script-template) function
**startScreen()** | -- | Starts rendering meshes added to Copperlicht's scene.
**stopScreen()** | -- | Recreates classes associated with rendering, also clearing any mesh added to [Copperlicht](https://www.ambiera.com/copperlicht/)'s scene.
**restartScreen()** | -- | Removes meshes added to [Copperlicht](https://www.ambiera.com/copperlicht/)'s scene.
**startEngine()** | -- | Starts rendering and processing of scripts of active ascene.
**resetEngine()** | -- | Recreates classes associated with GameEngine, reseting the whole game.

## Custom Scripts Creation

Scripts are to be created at QuestGameEngine/Data/Script and will be executed accordingly for each GameObject that includes them:
**Method** | **Parameters** | **Description**
--- | --- | ---
**static setupObject(gameObject:GameObject,<br/>scene:Scene,gameEngine:GameEngine,<br/>scriptParameters:GameObjectScript[])** | **gameObject**: The GameObject that executed the script. <br/> **scene**: Engine's active Scene. <br/> **gameEngine**: Instance of actual GameEngine. <br/> **scriptParameters**: Caller GameObject's parameters for this script. | This method will be run when a scene is first executed and has the objective of setting up the game.
**static processObject(gameObject:GameObject,<br/>scene:Scene,gameEngine:GameEngine,<br/>scriptParameters:GameObjectScript[])** | **gameObject**: The GameObject that executed the script. <br/> **scene**: Engine's active Scene. <br/> **gameEngine**: Instance of actual GameEngine. <br/> **scriptParameters**: Caller GameObject's parameters for this script. | This method will be run every frame and has the objective of adding logic to the game.

**Attribute** | **Description**
--- | ---
**static defaultScriptParameters:{parameterName:parameterValue}** | Describes default parameters to an object that acquires this script.

### Script Template
A template of one custom script can be seen next:
```javascript
class {
    static defaultScriptParameters = {
        parameter1:"value1"
    }
    static setupObject(gameObject,scene,gameEngine,scriptParameters){
        alert("it works!!!");
    }
    static processObject(gameObject,scene,gameEngine,scriptParameters){

    }   
}
```

## Classes Reference

### Model/GameObject.js
**Attribute** | **Description**
--- | ---
**data:GameObjectData** | Instance of [GameObjectData](#model/gameobjectdata.js) that contains savable data for each object of a scene.
**copperObject** | Attribute meant to be filled with a Node from [Copperlicht](https://www.ambiera.com/copperlicht/) and will be discarted on saving the scene.

### Model/GameObjectData.js

**Attribute** | **Description**
--- | ---
**name:string** | Name of the [GameObject](#model/gameobject.js) to be shown in editors.
**scripts:GameObjectScript[] | List of scripts to be executed in the [GameObject](#model/gameobject.js).
**texturePathPreloadList:string[] | An array of texture paths meant for otimization of rendering delay.

### Model/GameObjectScript.js

**Attribute** | **Description**
--- | ---
**path:string** | Path of the [script](#custom-script-creation) in QuestGameEngine/Data/Script/ refered to.
**scriptParameters:{paramName:paramValue}** | List of parameters described in the refered [script](#custom-script-creation) with specific values set for this [GameObject](#model/gameobject.js).

### Model/Scene.js
**Attribute** | **Description**
--- | ---
**name:string** | Scene name to be shown in editors.
**gameObjects:GameObject[]** | List of [GameObject](#model/gameobject.js) included in the scene.




