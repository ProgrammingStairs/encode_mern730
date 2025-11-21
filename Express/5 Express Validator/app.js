import express from 'express';
import Validation from 'express-validator';
const {check,validationResult} = Validation;
var app = express();
app.set("views","views");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(request,response)=>{
    response.render("index.ejs");
});
app.get("/register",(request,response)=>{
    response.render("register.ejs");
});
app.post("/viewInfo",[
    check("username","Empty Username").not().isEmpty(),
    check("email","Empty Email").not().isEmpty(),
    check("password","Empty Password").not().isEmpty().isLength({min:6,max:10}),
    check("contact","Empty Contact").custom((value)=>{
        var regex = /^[6789][0-9]{9}$/;
        if(regex.test(value))
            return true;
        else
            return false;
    })
],(request,response)=>{
    const error = validationResult(request);
    if(!error.isEmpty()){
        console.log("message : ",error);
        response.send("Error occured");        
    }
    else
        response.send("success");
});

app.listen(3000,()=>{
    console.log("connection established successfully");
});