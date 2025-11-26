import con from "../dbConfig/dbConnection.js";
// import dotenv from 'dotenv';
// dotenv.config();
export const createDatabase = (callback)=>{
    var query = `select count(*) as count from information_schema.tables where table_schema='${process.env.DATABASE}'`;

    // schemata query need to set here for checking database exist or not
    // current query checks tables inside that specific database if no table gives 0 always

    con.query(query,(error,result)=>{
        if(error){
            console.log("Error while checking database : ",error);
            callback(false);
        }
        else{
            if(result[0].count==0){
                console.log(result);
                // // note : creates all tables then run 
                var query = `create database if not exists ${process.env.DATABASE}`;
                con.query(query,(error,result)=>{
                    if(error){
                        console.log("error while creating database");
                        callback(error);
                    }else{
                        console.log(result);
                        console.log("database created successfully");
                        
                        
                    }
                });

            }else{
             console.log("Database setup completed");   
            }
        }
    })
}