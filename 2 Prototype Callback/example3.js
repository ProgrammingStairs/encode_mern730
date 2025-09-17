// example showing the concept of prototype

function Vehicle(brand,model,color){
    this.year = 2022;
    this.price = 1000000;
    this.brand = brand;
    this.model=model;
    this.color=color;
    this.printData = function(){
        console.log("Brand : "+this.brand);
        console.log("Model : "+this.model);
        console.log("Color : "+this.color);        
    }
}
Vehicle.prototype.showData = function(){
        console.log("Year : "+this.year);
        console.log("Price : "+this.price);
}
const obj = new Vehicle("Maruti","Fronx","blue");
obj.printData();
obj.showData();
        console.log("outside Brand : "+obj.brand);
        console.log("outside Model : "+obj.model);
        console.log("outside Color : "+obj.color);        
