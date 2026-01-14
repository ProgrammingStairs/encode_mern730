import mongoose from "mongoose";
import moment from 'moment';
const imageSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    profileOne:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    uploadedAt:{
        type:String,
        default: ()=> moment().format("hh:mm:ss A")
    },
    uploadedOn:{
        type:String,
        default: ()=> moment().format("DD/MM/YYYY")
    }

});

export default mongoose.model('imageSchema',imageSchema,'imageschema');