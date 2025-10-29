// example showing the concept of  http module 

var http = require("http");
var instance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("This is an <h2>example of Http Module in Node js</h2>");
    response.end();
});
instance.listen(3000,()=>{
    console.log("Server connection successfull");
});