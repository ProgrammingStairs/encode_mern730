// example showing the concept of callback

function myFun(a,b,callback){
    var sum = a+b;
    callback(sum);
}

var a = 100,b = 200;
var show = (res)=>{
    console.log("Sum : "+res);
}
myFun(a,b,show);
