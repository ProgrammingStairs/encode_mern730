// example to deal with mysql 
var mysql = require("mysql2");
var readLine = require("readline");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database : "mern730"
}); 
var instance = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

con.connect((error)=>{
    if(error)
        console.log("Error : ",error);
    else{
        console.log("Connection established successfully");
        showMenu();
    }
});

function showMenu(){
    instance.question("\nSelect Option : \n1 for Add Data\n2 for View all Data\n3 for update data\n4 for Delete Data\n5 for Exit\nEnter Code : ",(code)=>{
        switch(code){
            case '1' : addData();
                        break;
            case '2' : viewData();
                        break;
            case '3' : updateData();
                        break;
            case '4' : deleteData();
                        break;
            case '5' : exit();
                        break;
            default : console.log("Invalid selection");
                      con.close();
                      instance.close();   
                      break;
        }
    });
}

function addData(){
    instance.question("Enter Name : ",(name)=>{
        instance.question("Enter Email : ",(email)=>{
            instance.question("Enter Percentage : ",(percentage)=>{
                var values = [name,email,percentage];
                var query = "insert into student(name,email,percentage) values(?,?,?)";
                con.query(query,values,(error,result)=>{
                    if(error)
                        console.log("ERROR WHILE ADDING DATA");
                    else{
                        console.log("Data inserted successfully");
                        showMenu();
                    }
                });
            });
        });    
    });
}

function viewData(){
    var query = "select * from student";
    con.query(query,(error,result)=>{
        if(error)
            console.log("ERROR WHILE fetching DATA");
        else{
            // console.log(result);
            console.table(result);
            showMenu();
        }
    });
}

function updateData(){
    instance.question("Enter Email : ",(email)=>{
        var query = "select count(*) as checkEmail from student where email=?";
        var value=[email];
        con.query(query,value,(error,result)=>{
            if(error){
                console.log("ERROR WHILE fetching DATA : ",error);
                instance.close();
            }
            else{
                console.log(result);
                if(result[0].checkEmail!=0){
                    instance.question("Enter updated name : ",(name)=>{
                        instance.question("Enter updated percentage : ",(percentage)=>{
                            var query = "update student set name=?, percentage=? where email=?";
                            var values = [name,percentage,email];
                            con.query(query,values,(error,result)=>{
                                if(error)
                                    console.log("Error while updating data");
                                else{
                                    console.log("Data updated successfully");
                                    showMenu();
                                }
                            });
                        });
                    });
                }else{
                    console.log("Email Not Exists");
                }
                showMenu();
            }
        });
    });
}

function deleteData(){
    instance.question("Enter Email : ",(email)=>{
        var query = "select count(*) as checkEmail from student where email=?";
        var value=[email];
        con.query(query,value,(error,result)=>{
            if(error){
                console.log("ERROR WHILE fetching DATA : ",error);
                instance.close();
            }
            else{
               // console.log(result);
                if(result[0].checkEmail!=0){
                            var query = "delete from student where email=?";
                            var value = [email];
                            con.query(query,value,(error,result)=>{
                                if(error)
                                    console.log("Error while deleting data");
                                else{
                                    console.log("Data deleted successfully");
                                    showMenu();
                                }
                        });  
                }else{
                    console.log("Email Not Exists");
                    showMenu();
                }
            }
        });
    });
}

function exit(){
    console.log("Visit Again");
    showMenu();
}