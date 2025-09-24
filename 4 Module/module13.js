var obj = {
    name : "Andrew Anderson",
    email:"andrew@gmail.com",
    address:{
        city:"Indore",
        state:"MP",
        toString(){
            return this.city+","+this.state;
        }
    },
    pincode:452010
}
module.exports.myObj = obj;