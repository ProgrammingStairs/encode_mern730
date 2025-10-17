// example showing the concept of  http module 

var url = require('url');
var http = require("http");
var fs = require('fs');
var instance = http.createServer((request,response)=>{
    // http://localhost:3000/home?a=234&b=345
    //response.writeHead(200,{'content-type':'text/html'});
    var requestedURL = url.parse(request.url,true);
    console.log(requestedURL.pathname);
     
    if(requestedURL.pathname=='/' || requestedURL.pathname=='/home'){
        var result = fs.readFileSync('home.html');
        response.write(result);
    }
    else if(requestedURL.pathname=='/about'){
        var result = fs.readFileSync('about.html');
        response.write(result);
    }
    else if(requestedURL.pathname=='/contact'){
        var result = fs.readFileSync('contact.html');
        response.write(result);
    }
    else if(requestedURL.pathname=='/services'){
        var result = fs.readFileSync('services.html');
        response.write(result);
    }
    response.end();
});
instance.listen(3000,()=>{
    console.log("Server connection successfull");
});