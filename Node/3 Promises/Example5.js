// example showing the concept of promise

function myFun(){
    return new Promise((resolve,reject)=>{
        var obj = {
            name:"Andrew Anderson",
            age:56,
            salary:67890
        }
        resolve(obj);
    });
}
function myFunAgain(obj){
    return new Promise((resolve,reject)=>{
        var hobbies = ["Cricket","BasketBall"];
        obj.hobbies = hobbies;
        resolve(obj);
    });
}
myFun().then((obj)=>{
    myFunAgain(obj).then((res)=>{
        console.log("Name : "+res.name);
        console.log("Age : "+res.age);
        console.log("Salary : "+res.salary);
        console.log("Hobbies : "+res.hobbies);
    }).catch((error)=>{
        console.log(error);
    });
}).catch((error)=>{
    console.log(error);
});