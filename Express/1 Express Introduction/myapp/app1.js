import express from 'express';
var app = express();
// console.log(typeof app);

app.get("/",(request,response)=>{
   /*
    response.writeHead(200,{'content-type':'text/html'});
    response.write("This is my <h1>First Example</h1>");
    response.end();
   */
    //response.send("This is my <h1>First Example</h1>");
//    response.json({message:"This is my first example"});
// response.status(200).json({message:"This is my first example.."});
response.status(200).send({message:"This is my first example...."});
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});