import con from '../dbConfig/dbConnection.js';

export const addUserController = (request,response)=>{
    console.log("Received data : ",request.body);
    const query = "insert into user(username,email,password,address) values (?,?,?,?)";
    const values = [request.body.username,request.body.email,request.body.password,request.body.address];
    con.query(query,values,(error,result)=>{
        if(error){
            if(error.code=='ER_DUP_ENTRY')
                response.render("register.ejs",{message:"Duplicate Email | Please try with another Email"});
            else
                console.log("Error while adding data : ",error);
        }
        else{
            response.render("login.ejs",{message:"Registration Successfull"});
        }
    });
}

export const userLoginController = (request,response)=>{
    console.log("Received data : ",request.body);
    const query = "select * from user where email=? and password=?";
    const values = [request.body.email,request.body.password];
    con.query(query,values,(error,result)=>{
        if(error){
            console.log("Error while login : ",error);
        }
        else{
            request.session.email=request.body.email;
            request.session.save();
            response.render("profile.ejs",{message:"",email:request.session.email});
        }
    });
}

export const addToDoController = (request,response)=>{
    console.log("Received data : ",request.body);
    const query = "insert into todo(email,category,description,priority) values (?,?,?,?)";
    const values = [request.session.email,request.body.category,request.body.description,request.body.priority];
    con.query(query,values,(error,result)=>{
        if(error){
            console.log("Error while adding todo : ",error);
        }
        else{
            response.render("addToDo.ejs",{message:"ToDo Added Successfull",email:request.session.email});
        }
    });
}

export const viewToDoController = (request,response)=>{
    const query = "select * from todo where email=?";
    const value = [request.session.email];
    con.query(query,value,(error,result)=>{
        if(error)
            console.log("Error while fetching todo list : ",error);
        else{
            console.log(result);
            response.render("viewToDoList.ejs",{message:"",email:request.session.email,result});
        }
    });
}

export const deleteToDoController = (request,response)=>{
    const todoid = request.params.todoid;
    // console.log(todoid);
    const query = "delete from todo where todoid = ?";
    const value = [todoid];
    con.query(query,value,(error,result)=>{
        if(error)
            console.log("Error while deleting todo task : ",error);
        else{
            const query = "select * from todo where email=?";
            const value = [request.session.email];
            con.query(query,value,(error,result)=>{
                if(error)
                    console.log("Error while fetching todo list : ",error);
                else{
                    console.log(result);
                    response.render("viewToDoList.ejs",{message:"Task deleted successfully",email:request.session.email,result});
                }
            });
        }
    });
}