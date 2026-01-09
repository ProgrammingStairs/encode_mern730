import userSchema from "../schema/userSchema.js";
import mailer from "./mailer.js";
export const saveController = async(request,response)=>{
    try{
        var obj = await userSchema.findOne({email:request.body.email});
        console.log("received obj : ",obj);
        
        if(obj && obj.emailVerify==true){
            response.render("login.ejs",{message:"You are already Verified User | Please Login"});
        }else if(obj && obj.emailVerify==false){
                response.render("login.ejs",{message:"This Email Id Already registered | Either verify or try with another email id"});      
        }else{
            mailer.mailer(request.body.email,async (value)=>{
                if(value){
                    var result = await userSchema.create(request.body);
                    console.log("User Added Successfully : ",result);
                    response.render("login.ejs",{message:"Mail Sent Please Verify"});      

                }else{
                    console.log("Something went wrong in sending mail");
                    response.render("registration.ejs",{message:"Something went wrong in sending mail | please try again"});
                }
            });
        }

    }catch(error){
        console.log("Error in saveController : ",error);
        response.status(500).json({message:"Error Occured"});
    }
}

export const verifyEmailController = async(request,response)=>{
    try{
        var email = request.body.email;
        // console.log("received email : ",email);
        var updateStatus = {
            $set : {
                emailVerify:true
            }
        }
        var result = await userSchema.updateOne({email},updateStatus);
        console.log("Result : ",result);
        if(result.modifiedCount==1){
            response.render("login.ejs",{message:"Email Verified Successfully | Now you can Login"});
        }else{
            response.render("login.ejs",{message:"Email Already Verified"});
        }
        
    }catch(error){
        console.log("Errro while verify email : ",error);        
    }
}

export const loginController = async(request,response)=>{
    try{
        var email = request.body.email;
        var password = request.body.password;
        var status = {
            $and : [
                {email:email},
                {password:password}
            ]
        }
        var result = await userSchema.findOne(status);
        console.log("Result : ",result);
        // if(result.modifiedCount==1){
        //     response.render("login.ejs",{message:"Email Verified Successfully | Now you can Login"});
        // }else{
        //     response.render("login.ejs",{message:"Email Already Verified"});
        // }
        
    }catch(error){
        console.log("Errro while login : ",error);        
    }
}
