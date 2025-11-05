import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var app = express();

app.use(express.static('public'));

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/index1.html");
});
app.listen(3000,()=>{
    console.log("connection established successfully");
});