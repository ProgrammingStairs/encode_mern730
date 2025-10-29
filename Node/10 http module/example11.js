// example showing the concept of  http module 

var url = require('url');
var path = require("path");
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
        var requiredData = path.join(__dirname,'/public/css/','style.css');
        var data = fs.createReadStream(requiredData);
        data.pipe(response);
    }
    else if(requestedURL.pathname.match("\.webp$")){
        response.writeHead(200,{"content-type":"image/webp"});
        var requiredData = path.join(__dirname+'/public/images/img3.webp')
        var data = fs.createReadStream(requiredData);
        data.pipe(response);
    }
    
});
instance.listen(3000,()=>{
    console.log("Server connection successfull");
});