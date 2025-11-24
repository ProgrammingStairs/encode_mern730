import mysql from 'mysql2';

var con = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    port:process.env.PORT
});

async function myFun(){
    return new Promise((resolve,reject)=>{

    });
}
export default await myFun();