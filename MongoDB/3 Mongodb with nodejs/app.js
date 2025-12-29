import http from 'http';
import url from 'url';
import fs from 'fs';
import qs from 'querystring';
import { MongoClient } from 'mongodb';
var urlMongodb = "mongodb://127.0.0.1:27017/";
var instance = http.createServer(async(request,response)=>{
    var requestedURL = url.parse(request.url,true);
     const dbInstance = await MongoClient.connect(urlMongodb);
        const db = dbInstance.db("mern730");

    if(requestedURL.pathname=="/"){
        var data = fs.readFileSync("index.html");
        response.write(data);
        response.end();
    }
    else if(requestedURL.pathname=="/viewInfo"){
        var data = requestedURL.query;
        await db.collection("UserCollection").insertOne(data);
        response.write("Data Inserted sucessfully");
        response.end();
    }
    else if(requestedURL.pathname=="/viewPostInfo"){
        var chunkData='';
        request.on('data',(chunk)=>{
            chunkData+=chunk;
        });
        request.on('end',async()=>{
            var data = qs.parse(chunkData);
            await db.collection("UserCollection").insertOne(data);
            response.write("Data Inserted sucessfully");
            response.end();
        });
    }
});

instance.listen(3000,()=>{
    console.log("CConnection established successfully");
})