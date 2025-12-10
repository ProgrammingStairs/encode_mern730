import { DataTypes } from "sequelize";
import sequelize from "../connection/dbConfig.js";

const student = sequelize.define("student",{
    
},{tableName:"student"});

student.sequelize.sync().then(()=>{
    console.log("Table created successfully");
}).catch((error)=>{
    console.log("error occured : ",error);
});