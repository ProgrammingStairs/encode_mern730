// example showing the concept of handling dynamic routes
import express from 'express';

var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/example",(request,response)=>{
    var email = request.query.email;
    response.send(`Hello user , your email id is ${email}`);
});

app.get("/example/:email",(request,response)=>{
    var email = request.params.email;
    response.send(`Hello user , your email id is ${email}`);
});

app.get("/example/:username/:email",(request,response)=>{
    var username = request.params.username;
    var email = request.params.email;
    response.send(`Hello user , your email id is ${email} and your name is ${username}`);
});

app.post("/example1",(request,response)=>{
    var email = request.body.email;
    response.send(`Hello user , your email id is ${email}`);
});

// hit by localhost:3000/exampleDemo/
app.get("/exampleDemo/{*name}",(request,response)=>{
    console.log(request.params.name);
    
    var email = request.params.name ?? "noname";
    response.send(`Hello user , your email id is ${email}`);
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});