import { MongoClient } from "mongodb";
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance = await MongoClient.connect(url);
        var db = dbInstance.db("mern730_mongodb123");
        // console.log("db : ",db);
        var result = await db.createCollection("Employee");
        var res = await db.dropDatabase(); 
        console.log("database drop successfully | res : ",res);
    }catch(error){
        console.log("Error while connecting : ",error);
    }
}
myFun();