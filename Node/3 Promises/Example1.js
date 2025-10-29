// example showing the concept of promise
function myFun(){
    return new Promise((resolve,reject)=>{
        // resolve("Example of Promise");
        reject("Reject passed");
    })
}
myFun().then((msg)=>{
    console.log(msg);
}).catch((rejectReason)=>{
    console.log(rejectReason);
});