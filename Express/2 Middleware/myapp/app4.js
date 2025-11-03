import express from 'express';
var app = express();

const myFun1 = (request,response,next)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("<h3>This is an example 11..</h3>");
    next();
};
const myFun2 = (request,response,next)=>{
    response.write("<h3>This is an example 22..</h3>");
    next();
};

// Application level middleware | Top level middleware
// app.use(myFun1,myFun2);

app.use(myFun1); // Application level middleware | Top level middleware
app.use(myFun2); // Application level middleware | Top level middleware

app.get("/",(request,response)=>{
    response.write("<h3>This is an example 3..</h3>");
    response.end();
});

app.listen(3000,()=>{
    console.log("connection established successfully");
});