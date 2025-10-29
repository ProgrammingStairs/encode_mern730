// example showing the concept of async await

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

async function display(){
    try{
        var obj = await myFun();
        var res = await myFunAgain(obj);        
        console.log("Name : "+res.name);
        console.log("Age : "+res.age);
        console.log("Salary : "+res.salary);
        console.log("Hobbies : "+res.hobbies);
    }catch(error){
        console.log(error);
    }
}
display();