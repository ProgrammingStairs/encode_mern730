import student from "../model/studentModel.js";

export const addStudentController = async (request,response)=>{
    try{
        const result = await student.create(request.body);
        console.log(result);
        if(result.dataValues)
            response.render("addStudent.ejs",{message:"Student added successfully"});
        else
            response.render("addStudent.ejs",{message:"Student not Added"});
    }catch(error){
        console.log("Error : ",error);
    }
}

export const loginStudentController = async (request,response)=>{
    try{
        const result = await student.findOne({
            where : {
                email : request.body.email,
                password: request.body.password
            }
        });
        console.log(result);
        if(result){
            request.session.email=request.body.email;
            request.session.save();
            response.render("studentProfile.ejs",{message:"",email:request.session.email});
        }
        else
            response.render("loginStudent.ejs",{message:"Email id or password is incorrect"});
    }catch(error){
        console.log("Error : ",error);
    }
}

export const deActivateStudentController = async (request,response)=>{
    try{
        const email = request.params.email;
        // console.log("delete email : ",email);
       const result = await student.destroy({
        where : {
            email : email
        }
       });
    //    console.log("result : ",result);
        if(result){
            response.render("loginStudent.ejs",{message:"Student deleted successfully"});
        }else{
            response.render("loginStudent.ejs",{message:""});
        }
    }catch(error){
        console.log("Error while deactivate student: ",error);
    }
}

export const updateStudentDetailsController = async(request,response)=>{
    try{
        const email = request.params.email;
        // console.log("received email : ",email);
        var studentObj = await student.findOne({
            where:{
                email:email
            }
        });
        response.render("updateStudent.ejs",{message:"",email:request.session.email,studentObj});
    }catch(error){
        console.log("error in updateStudentDetailsController : ",error);   
    }
}

export const updateStudentController = async (request,response)=>{
    try{
        const result = await student.update({
            name:request.body.name,
            password:request.body.password,
            address: request.body.address
        },{
            where:{
                email:request.body.email
            }
        });
        //console.log(result);
       response.render("studentProfile.ejs",{message:"Profile Updated successfully",email:request.session.email});
             
    }catch(error){
        console.log("Error : ",error);
    }
}

export const logoutController = async (request,response)=>{
    try{
        request.session.email=null;
        request.session.destroy((error)=>{
            if(error)
                console.log("Error : "+error);
            else 
                response.render("loginStudent.ejs",{message:"Logout successfully"});             
        });
    }catch(error){
        console.log("Error : ",error);
    }
}
