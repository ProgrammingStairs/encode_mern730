// example showing the concept of promise

function checkData(num){
    return new Promise((resolve,reject)=>{
        (num%2==0) ? resolve("Even Number") : reject(new Error("Odd Number"));
    });
}
var promiseObj = checkData(107);
promiseObj.then((msg)=>{
    console.log(msg);
}).catch((error)=>{
    console.log("Error occured : ",error);
});