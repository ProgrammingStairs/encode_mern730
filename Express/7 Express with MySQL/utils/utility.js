import con from "../dbConfig/dbConnection.js";
// import dotenv from 'dotenv';
// dotenv.config();
export const createDatabase = (callback)=>{
    var query = `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${process.env.DATABASE}'`;
  
    con.query(query,(error,result)=>{
        if(error){
            console.log("Error while checking database : ",error);
            callback(false);
        }
        else{
            if(result.length==0){
                console.log(result); 
                var query = `create database if not exists ${process.env.DATABASE}`;
                con.query(query,(error,result)=>{
                    if(error){
                        console.log("error while creating database");
                        callback(false);
                    }else{
                        console.log("Database created successfully");
                        var query = `use ${process.env.DATABASE}`;
                        con.query(query,(error,result)=>{
                            if(error){
                                console.log("Error while selecting database");
                                callback(false);
                            }else{
                                console.log("Database selected");
                                var query = `create table user (username varchar(45) not null,email varchar(45) primary key,password varchar(45) not null,address varchar(45) not null);`
                                con.query(query,(error,result)=>{
                                    if(error){
                                        console.log("Error while creating user table : ",error);
                                        callback(false);
                                    }else{
                                        console.log("Table created successfully");
                                        var query = `create table todo (todoid int primary key auto_increment,email varchar(45) not null,category varchar(45) not null,description varchar(45) not null,priority varchar(45) not null,created_at DATETIME DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (email) REFERENCES user (email) ON DELETE CASCADE ON UPDATE CASCADE);`
                                            con.query(query,(error,result)=>{
                                                if(error){
                                                    console.log("Error while creating todo table");
                                                    callback(false);
                                                }else{
                                                    console.log("todo table created successfully");
                                                    callback(true);
                                                }
                                            }); 
                                    }
                                });
                            }
                        });                    
                    }
                });

            }else{
             console.log("Database setup completed");   
            }
        }
    })
}