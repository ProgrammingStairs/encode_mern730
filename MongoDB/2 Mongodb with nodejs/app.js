import { MongoClient } from "mongodb";
var url = "mongodb://127.0.0.1:27017/";

async function myFun(){
    try{
        var dbInstance = await MongoClient.connect(url);
        var db = dbInstance.db("mern730");
        var result = await db.collection("Product").aggregate([{
                              $lookup:{
                                  from:"Category",
                                  foreignField:"cat_id",
                                  localField:"category_id",
                                  as:"Product Details"
                              }
                            }]).toArray();
        // console.log(result);

        for(var i=0;i<result.length;i++){
          console.log("################################");
          console.log("Name : "+result[i].name);
          console.log("Price : "+result[i].price);
          console.log("Category Id : "+result[i].category_id);
          console.log("CategoryName : "+result[i]['Product Details'][0].name);
        }
        }catch(error){
        console.log("Error while connecting : ",error);
    }
}
myFun();