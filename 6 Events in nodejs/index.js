var events = require("events");
// console.log(events);

var eventEmitter = new events();

var listener = ()=>{
    console.log("Custom Event executes | listener ..!!");
};

var listener1 = ()=>{
    console.log("Custom Event executes | listeners1 ..!!");
};

eventEmitter.on("customEvent",listener);
eventEmitter.on("customEvent",listener1);
eventEmitter.addListener("customEvent",listener1);

// eventEmitter.removeAllListeners();
eventEmitter.removeAllListeners('customEvent');

eventEmitter.emit("customEvent");


var count = eventEmitter.listeners("customEvent");
console.log("No. of listeners : "+count.length);


