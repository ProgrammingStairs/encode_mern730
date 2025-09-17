// example showing the concept of callback

function myFun(i,printData){
    var x = setInterval(()=>{
        if(i<=10){
            printData(i);          
            i++;
        }else{
            clearInterval(x);
        }
    },1000);
}

var i=1;
var printData = (i)=>{
    console.log(i);
}

myFun(i,printData);