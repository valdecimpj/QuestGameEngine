import LoadingTrackerCounter from './LoadingTrackerCounter.js';

export default class DataLoadingTracker{
    
    textures;
    scripts;

    constructor(){
        this.textures=new LoadingTrackerCounter();
        this.scripts= new LoadingTrackerCounter();
    }
}