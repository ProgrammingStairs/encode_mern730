import { useState } from "react";

function RegisterComponent(){
    localStorage.setItem("navShow","register");
    const [userObj,setUserObj] = useState({});
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name] : value
        });
    }   
    const handleSubmit = (event)=>{
        event.preventDefault();
        var data = JSON.parse(localStorage.getItem("data"));
        console.log(data);
        if(!data){
            localStorage.setItem("data",JSON.stringify([...data||[],userObj]));
            alert("Data inserted successfully");
        }else{
            var existingObj = data.find(obj=> obj.email==userObj.email);
            console.log(existingObj);
            if(existingObj)
                alert("Email Already exist | Please try with another Email");
            else{
                localStorage.setItem("data",JSON.stringify([...data,userObj]));
                alert("Data inserted successfully");
            }
        }
        event.target.reset();
    }
    return(<div style={{margin:"30px"}}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            Username : <br/>
            <input
                type="text"
                placeholder="Enter Username"
                name="username"
                id="username"
                onChange={getData}
            /><br/>
            Email : <br/>
            <input
                type="email"
                placeholder="Enter Email"
                name="email"
                id="email"
                onChange={getData}
            /><br/>
            Password : <br/>
            <input
                type="password"
                placeholder="Enter Password"
                name="password"
                id="password"
                onChange={getData}
            /><br/>
            Address : <br/>
            <input
                type="text"
                placeholder="Enter Address"
                name="address"
                id="address"
                onChange={getData}
            /><br/>
            <input
                type="submit"
                value="Submit"
            /><input
                type="reset"
                value="Reset"
            />
        </form>
    </div>);
}
export default RegisterComponent;