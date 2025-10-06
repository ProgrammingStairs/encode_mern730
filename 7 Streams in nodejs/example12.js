// example 
var {Duplex} = require("stream");
const duplexStream = new Duplex({
    write(chunk){
        res = chunk;
    },
    read(){
        this.push(res);
        this.push(null);
    }
});

duplexStream.write("This is aan example of duplex stream");
duplexStream.on('data',(chunk)=>{
    console.log(chunk.toString());
});