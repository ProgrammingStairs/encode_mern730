// example showing the concept of callback

function myFun(callback){
    console.log("MyFun called..!!");
    callback();
}
myFun(function(){
    console.log("This is an example of callback");
});
