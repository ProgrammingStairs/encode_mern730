import userSchema from "../schema/userSchema.js";

export const findAllController = async(request,response)=>{
    try{
        var result = await userSchema.find();
        response.status(200).json({message:"User List",userList:result});
    }catch(error){
        console.log("Error in FindAllController : ",error);
        response.status(500).json({message:"Error Occured"});
    }
}

export const findByIdController = async(request,response)=>{
    try{
        var _id = request.params._id;
        var result = await userSchema.find({_id});
        response.status(200).json({message:"User Found",user:result});
    }catch(error){
        console.log("Error in FindByIdController : ",error);
        response.status(500).json({message:"Error Occured"});        
    }
}

export const saveController = async(request,response)=>{
    try{
        var result = await userSchema.create(request.body);
        response.status(201).json({message:"User Added",user:result});      
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
                username : request.body.username,
                password: request.body.password,
                gender:request.body.gender,
                hobbies : request.body.hobbies
            }
        }
        var res = await userSchema.updateOne({_id},update);
        console.log("Data updated successfully");
        response.status(200).json({message:"Data updated successfully"});
        
    }catch(error){
        console.log("Error in updateController : ",error);
        response.status(500).json({message:"Error Occured"});
    }
}

export const deleteController = async(request,response)=>{
    try{
        var _id = request.params._id;
        var res = await userSchema.deleteOne({_id});
        console.log("data deleted successfully");
        response.status(200).json({message:"Data Deleted Successfully"});
    }catch(error){
        console.log("Error in deleteController : ",error);
        response.status(500).json({message:"Error Occured"});        
    }
}