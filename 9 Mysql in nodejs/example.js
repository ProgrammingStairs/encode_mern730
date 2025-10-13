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
        var query = `select * from student`;
        con.query(query,(error,result)=>{
            if(error)
                console.log("Error while fetching data : ",error);
            else{
                // console.log(result);
                console.table(result);                
            }
        });
    }
});