import { MongoClient } from "mongodb";
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance = await MongoClient.connect(url);
        var db = dbInstance.db("mern730_mongodb");
        var result = await db.createCollection("Employee123");        
        console.log("collection created successfully | result : ",result);
        var res = await db.collection("Employee123").drop();
        console.log("collection dropped successfully | res : ",res);
        
    }catch(error){
        console.log("Error while connecting : ",error);
    }
}
myFun();