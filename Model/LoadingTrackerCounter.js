export default class LoadingTrackerCounter{

    amountToLoad;
    amountLoaded;
    ended;

    constructor(){
        this.amountLoaded=0;
        this.amountToLoad=0;
        ended=false;
    }
}