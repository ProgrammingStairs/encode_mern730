var events = require("events");
// console.log(events);

var eventEmitter = new events();

eventEmitter.on("customEvent",()=>{
    console.log("Custom Event executes");
});

eventEmitter.emit("customEvent");
