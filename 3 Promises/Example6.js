// example showing the concept of async await

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

async function display(){
    var printData = (obj)=>{
        return `Hello ${obj.name}, you are ${new Date().getFullYear() - obj.yob} years old`;
    }
    try{
        var res = await myFun(printData);
        console.log(res);
    }catch(error){
        console.log("Error : ",error);
    }
}
display();