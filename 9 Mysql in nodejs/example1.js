// example to take values from user in nodejs 

var readLine = require("readline");
const instance = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

instance.question("Enter name : ",(name)=>{
    console.log("Welcome "+name);
    instance.close();
});
