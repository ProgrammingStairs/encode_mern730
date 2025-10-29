// example showing the concept of  http module 
var url = require("url");
var http = require("http");
var instance = http.createServer((request,response)=>{
    // http://localhost:3000/home?a=100&b=200
    response.writeHead(200,{'content-type':'text/html'});
    var requestedURL = url.parse(request.url,true);
    console.log("path : ",requestedURL.path);
    console.log("typeof path : ",typeof requestedURL.path);

    console.log("pathname : ",requestedURL.pathname);
    console.log("typeof pathname : ",typeof requestedURL.pathname);

    console.log("query : ",requestedURL.query);
    console.log("typeof query : ",typeof requestedURL.query);
    var sum = parseInt(requestedURL.query.a) + parseInt(requestedURL.query.b);
    console.log("Sum : "+sum);
    
});
instance.listen(3000,()=>{
    console.log("Server connection successfull");
});