// example showing the concept of  http module 

var http = require("http");
var fs = require('fs');
var instance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    if(request.url=='/' || request.url=='/home'){
        fs.readFile('home.html',(error,result)=>{
            if(error)
                console.log("Error occured ",error);
            else{
                response.write(result);
                response.end();
            }
        })
    }else if(request.url=='/about'){
        fs.readFile('about.html',(error,result)=>{
            if(error)
                console.log("Error occured ",error);
            else{
                response.write(result);
                   response.end();
            }
        })
    }else if(request.url=='/contact'){
        fs.readFile('contact.html',(error,result)=>{
            if(error)
                console.log("Error occured ",error);
            else{
                response.write(result);
                   response.end();
            }
        })
    }else if(request.url=='/services'){
        fs.readFile('services.html',(error,result)=>{
            if(error)
                console.log("Error occured ",error);
            else{
                response.write(result);
                   response.end();
            }
        })
    }
 
});
instance.listen(3000,()=>{
    console.log("Server connection successfull");
});