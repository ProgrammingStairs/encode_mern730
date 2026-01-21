import userSchema from "../model/userSchema.js";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
export const loginController = async(request,response)=>{
    try{
        const USER_SECRET_KEY = process.env.USER_SECRET_KEY; 

        var email = request.body.email;
        var password = request.body.password;
        var status = {
            $and:[
                {email : email},
                {password : password}
            ]
        }
        const res = await userSchema.findOne(status);
        // console.log("res : ",res);
        if(res){
            request.body.role = "User";
            const expiryTime = {
                expiresIn:'1d'
            }
            const token = jwt.sign(request.body,USER_SECRET_KEY,expiryTime);
            response.cookie("user_token",token,{httpOnly:true,expires:60*60*24*365});
            response.redirect("/user/profile");
        }else{
            response.render("login.ejs",{message:"Invalid credentials"});
        }
    }catch(error){
        console.log("Error while dealing with logincontroller : ",error);        
    }
}

export const registerController = async(request,response)=>{
    try{        
        const result = await userSchema.create(request.body);
        console.log("Result : "+result);
        response.render("login.ejs",{message:"Registration Successfull"});
    }catch(error){
        console.log("Error while dealing with registercontroller : ",error);        
    }
}

