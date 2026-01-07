import userSchema from "../schema/userSchema.js";
import mailer from "./mailer.js";
export const saveController = async(request,response)=>{
    try{
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

    }catch(error){
        console.log("Error in saveController : ",error);
        response.status(500).json({message:"Error Occured"});
    }
}

export const verifyEmailController = async(request,response)=>{
    try{
        var email = request.body.email;
        console.log("received email : ",email);
        
    }catch(error){
        console.log("Errro while verify email : ",error);        
    }
}
