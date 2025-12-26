import { MongoClient } from "mongodb";
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance = await MongoClient.connect(url);
        var db = dbInstance.db("mern730_mongodb");
        var result = await db.collection("EmployeeNew").find().toArray(); 
        // console.log(result);
          console.table(result);
    }catch(error){
        console.log("Error while connecting : ",error);
    }
}
myFun();