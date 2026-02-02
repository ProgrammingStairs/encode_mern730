function myFun(obj){
    return `Hello ${obj.username}, Your email id is ${obj.email} and address is ${obj.address}`;
}
var obj = {
    username : "Andrew Anderson",
    email : "anddrew@gmail.com",
    address : "Indore"
}

const res = <p>{myFun(obj)}</p>
export default res; 