import ScriptConfig from './ScriptConfig.js';

export default class GameObjectScript{
    path;
    scriptConfig;

    constructor(){
        this.path='';
        this.scriptConfig=new ScriptConfig();
    }
}