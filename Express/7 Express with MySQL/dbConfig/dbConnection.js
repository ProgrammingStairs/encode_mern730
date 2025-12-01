import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

async function myFun(){
    var con = mysql.createConnection({
        host:process.env.HOST,
        user:process.env.USER,
        password:process.env.PASSWORD
    });

    return new Promise((resolve,reject)=>{
        var query = `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${process.env.DATABASE}'`;
        con.query(query,(error,result)=>{
            if(error){
                console.log("Error while making connection : ",error);
                reject(error);
            }else{
                if(result.length==0){
                    resolve(con);
                }else{
                    con.changeUser({database : process.env.DATABASE},(error)=>{
                        if(error){
                            console.log("error while changing database : ",error);
                            reject(error);
                        }else{
                            resolve(con);
                        }
                    })
                }
            }
        });
    });
}
var con = await myFun();
export default con;