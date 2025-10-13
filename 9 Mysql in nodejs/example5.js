// example to deal with mysql 
var mysql = require("mysql2");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root"
}); 

con.connect((error)=>{
    if(error)
        console.log("Error : ",error);
    else{
        console.log("Connection established successfully");
        var query = "create database if not exists mern730";
        con.query(query,(error,result)=>{
            if(error)
                console.log("Error while creating database : ",error);
            else{
                if(result.warningStatus!=0)
                    console.log("Database already exist");
                else
                    console.log("Database created successfully");                
            }
        });
    }
});