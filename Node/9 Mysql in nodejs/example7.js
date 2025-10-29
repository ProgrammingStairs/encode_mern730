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
                    values('andrew anderson','andrew@gmail.com',67.78)`;
        // var query = `insert into student(name,email)
        //             values('Peter Parker','peter@gmail.com')`;
        // var query = `insert into student values(301,'jack jackson','jack@gmail.com',43.78)`;
        
        con.query(query,(error,result)=>{
            if(error)
                console.log("Error while inserting data : ",error);
            else{
                console.log("Data inserted successfully");                
            }
        });
    }
});