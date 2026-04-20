import tpoSchema from "../model/tpoSchema.js";
import mailer from "./mailer.js";

export const tpoRegisterController = (request,response)=>{
    try{
        mailer.mailer(request.body._id,async (result)=>{
            if(result){
                const res = await tpoSchema.create(request.body);                
                console.log("Res : ",res);
                
            }else{
                console.log("Error while sending mail in tpoRegistrationController");                
            }
        });
    }catch(error){
        console.log("Error in tpoRegisterController : ",error);
    }
}
export const verifyEmailController = async (request,response)=>{
    try{
        const email = request.body.email;
        // console.log("receive email to verify : ",email);
        const status = {
            $set:{
                emailVerify:"Verified"
            }
        }
        const res = await tpoSchema.updateOne({_id:email},status);
        console.log("res : ",res);
        
    }catch(error){
        console.log("Error in verifyEmailController : ",error);
    }
}
export const tpoLoginController = (request,response)=>{
    try{

    }catch(error){
        console.log("Error in tpoLoginController : ",error);
    }
}