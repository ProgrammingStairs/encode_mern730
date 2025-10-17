// example showing the concept of  http module 

var http = require("http");
var fs = require('fs');
var instance = http.createServer((request,response)=>{
    //response.writeHead(200,{'content-type':'text/html'});
    if(request.url=='/' || request.url=='/home'){
        var result = fs.readFileSync('home.html');
        response.write(result);
    }
    else if(request.url=='/about'){
        var result = fs.readFileSync('about.html');
        response.write(result);
    }
    else if(request.url=='/contact'){
        var result = fs.readFileSync('contact.html');
        response.write(result);
    }
    else if(request.url=='/services'){
        var result = fs.readFileSync('services.html');
        response.write(result);
    }
    response.end();
});
instance.listen(3001,()=>{
    console.log("Server connection successfull");
});