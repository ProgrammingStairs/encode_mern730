var {domain,protocol} = require("./module11.js");

var res = protocol("http://")+domain("www.google.com");
console.log("Result  : ",res);
