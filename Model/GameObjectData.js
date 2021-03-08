
export default class GameObjectData{
    id;
    name;
    scripts;
    texturePathPreloadList;

    constructor(){
        this.id=-1;
        this.name='';
        this.scripts=[];
        this.meshPathList=[];
        this.texturePathList=[];
    }
}