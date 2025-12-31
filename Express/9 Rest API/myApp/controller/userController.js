import userSchema from "../schema/userSchema.js";

export const findAllController = async(request,response)=>{
    try{
        var result = userSchema.find();
        response.status(200).json({message:"User List",userList:result});
    }catch(error){
        console.log("Error in FindAllController : ",error);
        response.status(500).json({message:"Error Occured"});
    }
}

export const findByIdController = async(request,response)=>{
    try{
        var _id = request.params._id;
        var result = userSchema.find({_id});
        response.status(200).json({message:"User Found",user:result});
    }catch(error){
        console.log("Error in FindByIdController : ",error);
        response.status(500).json({message:"Error Occured"});        
    }
}

export const saveController = async(request,response)=>{
    try{
        var result = userSchema.create(request.body);
        response.status(200).json({message:"User Added",user:result});      
    }catch(error){
        console.log("Error in saveController : ",error);
        response.status(500).json({message:"Error Occured"});
    }
}

export const updateController = async(request,response)=>{
    try{
        var _id = request.params._id;
        var update = {
            $set : {
                
            }
        }
    }catch(error){
        console.log("Error in updateController : ",error);
        response.status(500).json({message:"Error Occured"});
    }
}

export const deleteController = async(request,response)=>{
    try{

    }catch(error){
        console.log("Error in deleteController : ",error);
        response.status(500).json({message:"Error Occured"});        
    }
}