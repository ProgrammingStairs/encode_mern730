// example showing the concept of prototype

function Employer(){
    this.empId = 101;
    this.name = "Peter Parker";
    this.show = function(){
        console.log("Employer Id : ",this.empId);
        console.log("Employer name : ",this.name);        
    }
}
const obj = new Employer();
obj.show();