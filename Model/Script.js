import DefaultScriptConfig from './ScriptConfig.js';

export default class Script{
    defaultScriptConfig;

    static setupObject(gameObject,scene,gameEngine,scriptConfig){
        this.defaultScriptConfig=new DefaultScriptConfig();
    }

    static processObject(gameObject,scene,gameEngine,scriptConfig){

    }
}