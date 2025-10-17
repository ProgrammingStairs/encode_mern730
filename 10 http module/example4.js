// example showing the concept of  http module 

var http = require("http");
var instance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    if(request.url=='/' || request.url=='/home'){
        response.write("Home Page");
    }else if(request.url=='/about'){
        response.write("About Page");
    }else if(request.url=='/contact'){
        response.write("Contact Page");
    }else if(request.url=='/services'){
        response.write("Services Page");
    }
    response.end();
});
instance.listen(3000,()=>{
    console.log("Server connection successfull");
});