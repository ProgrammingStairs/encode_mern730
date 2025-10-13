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
        var query = `update student set name=?,percentage=? where email=?`;
        var values = ['Jackson Jack',100,'jackky@gmail.com'];
        con.query(query,values,(error)=>{
            if(error)
                console.log("Error while updating data : ",error);
            else{
                console.log("Data updated successfully");                
            }
        });
    }
});