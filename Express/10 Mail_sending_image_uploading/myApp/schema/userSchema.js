import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    _id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    hobbies : {
        type:[String],
        required:true
    }
});

export default mongoose.model('userSchema',userSchema,'user');