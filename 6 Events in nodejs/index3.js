var events = require("events");
// console.log(events);

var eventEmitter = new events();

var listener1 = ()=>{
    console.log("Custom Event executes..!!");
};

eventEmitter.on("customEvent",listener1);
eventEmitter.on("customEvent",listener1);
eventEmitter.on("customEvent",listener1);

eventEmitter.emit("customEvent");


