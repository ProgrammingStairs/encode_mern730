import express from 'express';
import dotenv from 'dotenv';
import expressSession from 'express-session';
dotenv.config();
var app = express();
app.set("views","views");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(expressSession({secret:process.env.SECRET,resave:true,saveUninitialized:true}));
app.get("/",(request,response)=>{
    response.render("index.ejs",{message:""});
});

app.post("/login",(request,response)=>{
    console.log(request.body);
    
    const {email,password} = request.body;
    if(email=="admin@gmail.com" && password=="admin@123"){
        request.session.email = email;
        request.session.save();
        response.render("profile.ejs",{email:request.session.email,message:"Login successfull"});
    }else{
    response.render("index.ejs",{message:"Error while login"});
        
    }
});

app.listen(process.env.PORT,()=>{
    console.log("connection established successfully");
});