import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    emailVerify:{
        type:Boolean,
        default:false
    }
});

export default mongoose.model('userSchema',userSchema,'userMail');