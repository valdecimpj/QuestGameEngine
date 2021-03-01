import LoadingTrackerCounter from './LoadingTrackerCounter.js';

export default class DataLoadingTracker{
    
    textures;
    meshes;
    scripts;

    constructor(){
        this.textures=new LoadingTrackerCounter();
        this.meshes = new LoadingTrackerCounter();
        this.scripts= new LoadingTrackerCounter();
    }
}