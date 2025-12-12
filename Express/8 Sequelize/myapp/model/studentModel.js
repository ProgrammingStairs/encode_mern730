import { DataTypes } from "sequelize";
import sequelize from "../connection/dbConfig.js";

const student = sequelize.define("student",{
    sid:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull : false,
        primaryKey : true,
        required:true
    },
    name:{
        type:DataTypes.STRING(45),
        allowNull:false,
        required : true
    },
    email:{
        type:DataTypes.STRING(45),
        allowNull:false,
        required : true
    },
    password:{
        type:DataTypes.STRING(45),
        allowNull:false,
        required : true
    },
    address:{
        type:DataTypes.STRING(45),
        allowNull:false,
        required : true
    }
},{tableName:"student"});

student.sequelize.sync().then(()=>{
    console.log("Table created successfully");
}).catch((error)=>{
    console.log("error occured : ",error);
});

export default student;