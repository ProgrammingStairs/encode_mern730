import express from 'express';
import cookieParser from 'cookie-parser';

var app = express();
app.use(cookieParser());

app.get("/",(request,response)=>{
    response.send("Cookie Example");
})
app.get("/addCookie",(request,response)=>{
    response.cookie("cookieName1","andrew@gmail.com",{maxAge:360000});
    response.cookie("cookieName2","452010",{maxAge:360000});
    response.send("Cookie setted successfully");
});
app.get("/viewCookies",(request,response)=>{
    response.send(request.cookies);
});
app.get("/delete",(request,response)=>{
    response.clearCookie("cookieName1");
    response.send("Cookie deleted successfully");
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});