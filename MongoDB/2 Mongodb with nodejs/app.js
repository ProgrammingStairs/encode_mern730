import { MongoClient } from "mongodb";
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance = await MongoClient.connect(url);
        var db = dbInstance.db("mern730_mongodb");
        var updateBy = {
            name : "Vijay"
        }
        var updatedValue = {
            $set:{
                address:"Indore"
            }
        }
        await db.collection("EmployeeNew").updateOne(updateBy,updatedValue); // <<---------- not updated
        console.log("Data Updated successfully");
    }catch(error){
        console.log("Error while connecting : ",error);
    }
}
myFun();