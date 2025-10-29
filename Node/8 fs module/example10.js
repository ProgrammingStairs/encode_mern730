// example showing the concept of fs module 

var fs = require("fs");
var pathname = "recordFileName.txt";

const data = fs.readFileSync(pathname,'utf-8');
var res=0;
var name='';
for(i=0;i<data.length;i++){
    if(data[i]=="\n"){
        name = data.slice(res,i);
        res = i+1;
   console.log("Filename : "+name);    
        console.log(fs.readFileSync(name,'utf-8'));
      }
}
