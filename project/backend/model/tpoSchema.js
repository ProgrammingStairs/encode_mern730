import mongoose from "mongoose";
var tpoSchema = mongoose.Schema({
    _id:{
        type:String,
        required : true
    },
    username : {
        type:String,
        required : true
    },
    password : {
        type:String,
        required : true
    },
    emailVerify:{
        type:String,
        default:"Not Verified"
    },
    adminVerify:{
        type:String,
        default:"Not Verified"
    },
    status:{
        type:Boolean,
        default:false
    }
});

export default mongoose.model('tpoSchema',tpoSchema,'tpo');