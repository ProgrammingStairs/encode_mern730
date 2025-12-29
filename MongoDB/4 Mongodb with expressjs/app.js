import express from 'express';
var app = express();
import { MongoClient } from 'mongodb';
var urlMongodb = "mongodb://127.0.0.1:27017/";
const dbInstance = await MongoClient.connect(urlMongodb);
const db = dbInstance.db("mern730");

app.set("views","views");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(request,response)=>{
    response.render("index.ejs");
});
app.get("/viewInfo",async(request,response)=>{
    var data = request.query;
    await db.collection("UserCollection").insertOne(data);
    response.send("Data Inserted sucessfully");
});

app.post("/viewPostInfo",async(request,response)=>{
    var data = request.body;
    await db.collection("UserCollection").insertOne(data);
    response.send("Data Inserted sucessfully");
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
})
