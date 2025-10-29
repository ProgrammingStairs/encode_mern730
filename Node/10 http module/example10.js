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
        response.end();
    }
    else if(requestedURL.pathname=='/about'){
        var result = fs.readFileSync('about.html');
        response.write(result);
        response.end();
    }
    else if(requestedURL.pathname.match("\.css$")){
        response.writeHead(200,{"content-type":"text/css"});
        var data = fs.createReadStream('public/css/style.css');
        data.pipe(response);
    }
    else if(requestedURL.pathname.match("\.webp$")){
        response.writeHead(200,{"content-type":"image/webp"});
        var data = fs.createReadStream('public/images/img3.webp');
        data.pipe(response);
    }
    
});
instance.listen(3000,()=>{
    console.log("Server connection successfull");
});