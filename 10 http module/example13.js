// example showing the concept of  http module 

var http = require("http");
var url = require("url");
var fs = require("fs");

var instance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':"text/html"});
    const requestedURL = url.parse(request.url,true);

    if(requestedURL.pathname="/"){
        var data = fs.readFileSync("login.html");
        response.write(data);
      //  response.end();
    }

    else if(requestedURL.pathname=='/viewInfo'){
        
        var obj= requestedURL.query;
                console.log("username : "+obj.username);

        response.write("<br>Username : "+obj.username);
        response.write("<br>Email : "+obj.email);
        response.write("<br>Password : "+obj.password);
        response.write("<br>Address : "+obj.address);
      //  response.end();
    }
    response.end();

});

instance.listen(3000,()=>{
    console.log("Connection established successfully");
});


