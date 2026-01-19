import userSchema from "../model/userSchema.js";

export const loginController = async(request,response)=>{
    try{

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