// example showing the concept of callback

function myFun(message,printData){
    console.log("Sending.....");
    setTimeout(()=>{
            printData(message);
    },4000);
}

var message = "Email Sent";
var printData = (msg)=>{
    console.log(msg+"   |   Task Completed");
}
myFun(message,printData);