import { MongoClient } from "mongodb";
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance = await MongoClient.connect(url);
        var db = dbInstance.db("mern730_mongodb");
        var obj = {
            name : "Andrew Anderson",
            age : 45,
            address : "Indore Madhya Pradesh"
        }
        await db.collection("EmployeeNew").insertOne(obj);
        console.log("Data inserted successfully");
    }catch(error){
        console.log("Error while connecting : ",error);
    }
}
myFun();