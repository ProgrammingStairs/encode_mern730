import Events from "events";
class MyClass extends Events{}
var eventEmitter = new MyClass();

eventEmitter.on("data",()=>{
    console.log("data event emits");
});
eventEmitter.on("end",()=>{
    console.log("end event emits");
});
eventEmitter.on("error",()=>{
    console.log("error event emits");
});
eventEmitter.on("finish",()=>{
    console.log("finish event emits");
});

eventEmitter.emit("data");
eventEmitter.emit("end");
eventEmitter.emit("error");
eventEmitter.emit("finish");


