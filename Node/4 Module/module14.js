function Employer(){
    this.name = "Andrew Anderson",
    this.email="andrew@gmail.com",
    this.address={
        city:"Indore",
        state:"MP",
        toString(){
            return this.city+","+this.state;
        }
    },
    this.pincode=452010
}
module.exports = new Employer();