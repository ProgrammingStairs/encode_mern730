import express from 'express';
var app = express();

app.get("/",(request,response,next)=>{
    response.write("statement 0");
    next();
},(request,response)=>{
    response.write("<br>statement 1");
    response.end();
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});