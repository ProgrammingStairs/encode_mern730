// example showing the concept of promise

function sortedFun(array){
    function ascendingOrder(){
        return array.sort((a,b)=>{
            return a-b;
        });
    }
    function descendingOrder(){
        return array.sort((a,b)=>{
            return b-a;
        });
    }
    return new Promise((resolve,reject)=>{
        (arr.length%2==0) ? resolve(ascendingOrder()) : reject(descendingOrder());
    });
}

var arr = [34,43,3,4,67];
var promiseObj = sortedFun(arr);
promiseObj.then((res)=>{
    console.log("Array elements : ",res);
}).catch((res)=>{
    console.log("Array elements : ",res);
});
