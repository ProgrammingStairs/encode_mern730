import { MongoClient } from "mongodb";
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance = await MongoClient.connect(url);
        var db = dbInstance.db("mern730_mongodb");
        var obj = [{
            name : "Andrew Anderson",
            age : 45,
            address : "Indore Madhya Pradesh"
        },{
            name : "Peter Parker",
            age : 23,
            address : "Indore Madhya Pradesh"
        },{
            name : "Sim Simon",
            age : 26,
            address : "Bhopal Madhya Pradesh"
        },{
            name : "Jackson Jack",
            age : 89,
            address : "Ujjain Madhya Pradesh"
        },{
            name : "Vijay",
            age : 60,
            address : "USA"
        }];
        await db.collection("EmployeeNew").insertMany(obj);
        console.log("Data inserted successfully");
    }catch(error){
        console.log("Error while connecting : ",error);
    }
}
myFun();