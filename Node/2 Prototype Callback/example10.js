// example showing the concept of callback

function myFun(a,b,task,printData){
    var res;
    switch(task.toLowerCase()){
        case "addition" : 
                res = a+b;    
                break;
        case "subtraction" : 
                res = a-b;    
                break;
        case "multiplication" :
                res = a*b;    
                break;
        case "division" : 
                res = a/b;    
                break;
        case "modulus" : 
                res = a%b;    
                break;
        default : res = "Invalid Operation";
                    break;
    }
    printData(res);
}

var task = "DIVISION";
var printData = (res)=>{
    console.log("Result : "+res);
}
myFun(100,200,task,printData);