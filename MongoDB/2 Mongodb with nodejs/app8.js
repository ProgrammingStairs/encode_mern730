import { MongoClient } from "mongodb";
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance = await MongoClient.connect(url);
        var db = dbInstance.db("mern730_mongodb");
        var deleteData = {
            name : "Jackson Jack"
        }
        await db.collection("EmployeeNew").deleteMany(deleteData); 
        console.log("Data Deleted successfully");
    }catch(error){
        console.log("Error while connecting : ",error);
    }
}
myFun();