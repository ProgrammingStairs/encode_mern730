var events = require("events");
// console.log(events);

var eventEmitter = new events();

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


