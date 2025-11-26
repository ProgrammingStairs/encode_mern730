import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
var con = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD
});

export default con;

// async function myFun(){
//     return new Promise((resolve,reject)=>{

//     });
// }
// export default await myFun();