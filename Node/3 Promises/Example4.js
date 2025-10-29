// example showing the concept of promise

function myFun(printData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var obj = {
                name : "Peter Parker",
                yob : 2000
            }
            resolve(printData(obj));
        },3000);
    });    
}
var printData = (obj)=>{
    return `Hello ${obj.name}, you are ${new Date().getFullYear() - obj.yob} years old`;
}
myFun(printData).then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
});
