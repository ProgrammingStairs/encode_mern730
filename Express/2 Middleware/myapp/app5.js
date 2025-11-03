import express from 'express';
var app = express();

const myFun1 = (request,response,next)=>{
    response.write("<h3>This is an example 11..</h3>");
    next();
};
const myFun2 = (request,response,next)=>{
    response.write("<h3>This is an example 22..</h3>");
    next();
};


app.get("/",(request,response,next)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("<h3>This is an example 33..</h3>");
    next();
});

app.use(myFun1); // Application level middleware | Top level middleware
app.use(myFun2); // Application level middleware | Top level middleware


app.listen(3000,()=>{
    console.log("connection established successfully");
});
