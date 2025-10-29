
var events = require("events");
// console.log(events);

var eventEmitter = new events();

var listener = ()=>{
    console.log("Custom Event executes | listener ..!!");
};

// eventEmitter.on("customEvent",listener);
eventEmitter.once("customEvent",listener);

eventEmitter.emit("customEvent");
eventEmitter.emit("customEvent");
eventEmitter.emit("customEvent");
eventEmitter.emit("customEvent");
eventEmitter.emit("customEvent");

var count = eventEmitter.listeners("customEvent");
console.log("No. of listeners : "+count.length);


