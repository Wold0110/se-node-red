module.exports = function (RED) {
  function iot(config){
    RED.nodes.createNode(this, config);
    this.token = config.token;
    var node = this;
    var msg = {};
    //var XMLHttpRequest = require('XMLHttpRequest');
    url = "https://online.wonderware.com/apis/upload/datasource";
    //url = "https://requestb.in/17s1sr51";
    this.on('input',function(msg){
        var headers = {
          "method": "POST",
          "authorization":this.token,
          }
        msg.headers = headers;
        /*
        var xhttp = new XMLHttpRequest();
        XMLHttpRequest.open("POST", url, true);
        XMLHttpRequest.setRequestHeader("authorization", this.token);
        XMLHttpRequest.send(msg.payload);
        
        var ActiveXObject = context.global.ActiveXObject;
        var fileSystem=new ActiveXObject("Scripting.FileSystemObject");
        var monfichier=fileSystem.OpenTextFile("C:\\Users\\SESA456011\\Desktop\\Related projects\\Wonderware\\data.csv", 1 ,true);
        msg.payload = monfichier.ReadAll();*/
        msg.url = url;
        msg.payload = msg.payload;
        node.send(msg);
    })
  }
  RED.nodes.registerType("Wonderware_upload",iot);
}