import FileService from "./FileService.js";

export default class ScriptService{
    static loadScript(scriptPath,callback){
        FileService.getFileAsText(scriptPath,(responseText)=>{
            let script = Function("return "+responseText)();
            callback(script);
        });
    }
}