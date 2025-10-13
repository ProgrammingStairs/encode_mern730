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
        var query = `create table if not exists student
                     (rno int primary key auto_increment,
                     name varchar(45) not null,
                     email varchar(45) not null,
                     percentage double default 0)`;
        con.query(query,(error,result)=>{
            if(error)
                console.log("Error while creating table : ",error);
            else{
                if(result.warningStatus!=0)
                    console.log("Table already exist");
                else
                    console.log("Table created successfully");                
            }
        });
    }
});