import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import bodyParser from 'body-parser';
var __filename = fileURLToPath(import.meta.url);
var __dirname  = path.dirname(__filename);
var app = express();

// third party middleware
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// built in middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(request,response)=>{
    response.sendFile(__dirname+'/index.html');
});
// for get method
// app.get("/viewInfo",(request,response)=>{
//     const {username,email,password,address} = request.query;
//     response.write("<br>Username : "+username);
//     response.write("<br>Email : "+email);
//     response.write("<br>Password : "+password);
//     response.write("<br>Address : "+address);
// });

// for post method
app.post("/viewInfo",(request,response)=>{
    const {username,email,password,address} = request.body;
    response.write("<br>Username : "+username);
    response.write("<br>Email : "+email);
    response.write("<br>Password : "+password);
    response.write("<br>Address : "+address);
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});