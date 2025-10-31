import express from 'express';
var app = express();
// console.log(typeof app);

app.get("/",(request,response)=>{
    response.send("<h1>Home Page</h1>");
});
app.post("/about",(request,response)=>{
    response.send("<h1>About Page</h1>");
});
app.put("/contact",(request,response)=>{
    response.send("<h1>Contact Page</h1>");
});
app.delete("/services",(request,response)=>{
    response.send("<h1>Services Page</h1>");
});
app.all("/faq",(request,response)=>{
    response.send("<h1>FAQ Page</h1>");
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});
