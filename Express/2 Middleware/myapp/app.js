import express from 'express';
var app = express();

app.get("/",(request,response,next)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("<h3>This is an example 33..</h3>");
    const error = new Error("Error occured");
    next(error);
});

// Error Handling middleware
app.use((error,request,response,next)=>{
    response.write("<h3>"+error+"</h3>");
    next();
}); 


app.listen(3000,()=>{
    console.log("connection established successfully");
});