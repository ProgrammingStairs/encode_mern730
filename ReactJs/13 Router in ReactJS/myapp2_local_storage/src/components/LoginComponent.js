import { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginComponent(){
    localStorage.setItem("navShow","login");
     const [userObj,setUserObj] = useState({});
     const navigate = useNavigate();
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
           var existingObj = data.find(obj=> obj.email==userObj.email && obj.password==userObj.password);
            console.log(existingObj);
            if(existingObj){
                navigate("/profile",{
                    state:{
                        message:"Welcome to Profile",
                        email:userObj.email
                    }
                })
            }
            else{
                alert("Email id or password is wrong");
            }
        
        event.target.reset();
    }
    return(<div style={{margin:"30px"}}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
            <input
                type="submit"
                value="Login"
            /><input
                type="reset"
                value="Reset"
            />
        </form>
    </div>);
}
export default LoginComponent;