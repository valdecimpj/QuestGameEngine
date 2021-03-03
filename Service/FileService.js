export default class FileService{
    static getFileAsText(fileUrl,callback){
        let http = new XMLHttpRequest();
        http.onload=(response)=>{
            callback(http.responseText);
        };
        http.open("get",fileUrl,true);
        http.send();
    }
}