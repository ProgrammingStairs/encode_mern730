import { MongoClient } from "mongodb";
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance = await MongoClient.connect(url);
        var db = dbInstance.db("mern730");
        var result1 = await db.collection("Employee").find().sort({salary:-1}).toArray();
        var fhs = result1[0].salary;

        var result2 = await db.collection("Employee").find({salary : {$ne : fhs}}).sort({salary:-1}).toArray();
        var shs = result2[0].salary;

        var result3 = await db.collection("Employee").find({salary : {$lt : shs}}).sort({salary:-1}).toArray();
        var ths = result3[0].salary;

          console.log("First Highest Salary : "+fhs);
          console.log("Second Highest Salary : "+shs);
          console.log("Third Highest Salary : "+ths);

        }catch(error){
        console.log("Error while connecting : ",error);
    }
}
myFun();