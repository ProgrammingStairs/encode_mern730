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
        var query = `delete from student where email=?`;
        var values = ['jack@gmail.com'];
        con.query(query,values,(error)=>{
            if(error)
                console.log("Error while deleting data : ",error);
            else{
                console.log("Data deleted successfully");                
            }
        });
    }
});