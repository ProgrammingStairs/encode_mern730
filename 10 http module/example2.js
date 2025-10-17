// example showing the concept of  http module 

var http = require("http");
var instance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("<br>url : "+request.url);
    response.write("<br>method : "+request.method);
    response.write("<br>headers : "+request.headers);
    response.write("<br>headers.host : "+request.headers.host);
    response.end();
});
instance.listen(3000,()=>{
    console.log("Server connection successfull");
});