// example to deal with mysql 
var mysql = require("mysql2");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database : "mern730"
}); 

con.connect((error)=>{
    if(error)
        console.log("Error : ",error);
    else{
        console.log("Connection established successfully");
        var query = `insert into student(name,email,percentage)
                    values(?,?,?)`;
        var values = ['Jaccky Jack','jackky@gmail.com',60.65];
        con.query(query,values,(error)=>{
            if(error)
                console.log("Error while inserting data : ",error);
            else{
                console.log("Data inserted successfully");                
            }
        });
    }
});