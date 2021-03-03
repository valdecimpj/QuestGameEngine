export default class Keyboard{
    screen;
    keys;

    constructor(screen){
        this.screen=screen;
        this.setupKeyboard();
    }

    setupKeyboard(){
        this.keys=[];
        window.onkeydown=(e)=>{
            this.keys[e.code]=true;
            this.screen.copperlicht.handleKeyDown(e);
        }
        window.onkeyup=(e)=>{
            this.keys[e.code]=undefined;
            this.screen.copperlicht.handleKeyDown(e);
        }
    }
}