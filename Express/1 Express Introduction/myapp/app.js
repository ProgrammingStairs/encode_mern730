import express from 'express';
import url from 'url';
var app = express();

// console.log(typeof app);

// http://localhost:3000/about?a=100&b=200
app.get("/about",(request,response)=>{
    var data = url.parse(request.url,true);
    // console.log(typeof JSON.parse(data.query.a));
    response.send("<h1>About Page</h1>Result : "+((JSON.parse(data.query.a)+JSON.parse(data.query.b))));
});
app.listen(3000,()=>{
    console.log("Connection established successfully");
});