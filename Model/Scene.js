export default class Scene{
    name;
    gameObjects;
    idGenerator;

    constructor(){
        this.name='untitled';
        this.gameObjects=[];
        this.idGenerator=0;
    }
}