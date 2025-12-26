import http from 'http';
import url from 'url';
import fs from 'fs';

var instance = http.createServer((request,response)=>{
    var requestedURL = url.parse(request.url,true);
    if(requestedURL.pathname=="/"){
        var data = fs.readFileSync("index.html");
        response.write(data);
        response.end();
    }
});

instance.listen(3000,()=>{
    console.log("CConnection established successfully");
})