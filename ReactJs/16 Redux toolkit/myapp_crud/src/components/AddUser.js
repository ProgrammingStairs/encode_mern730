import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../store/UserSlice.js";
import { useLocation } from "react-router-dom";

function AddUser(){
    const location = useLocation();
    console.log("add user index : ",location.state?.index);
    // here index = 0 is treated as a false thats why we put nullish coaleshing operaator     
    const [indexing,setIndexing] = useState(location.state?.index ?? -1); 
    const [userObj,setUserObj] = useState(location.state?.userData ? location.state.userData : {});
    const dispatch = useDispatch();
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(indexing==-1){
            console.log("add entry : ",indexing);            
            dispatch(addUser(userObj));
        }else{
            userObj.index = indexing;
            console.log("*************** : ",userObj);
                        console.log("update entry : ",indexing);
            dispatch(updateUser(userObj));
            setIndexing(-1);
        }
        setUserObj({
            username:'',
            email:'',
            password:'',
            address:''
        })    
        // event.target.reset();
    }
    return (<>
        <h3>{location.state?.userData ? "Update" : "Add User"}</h3>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Username"
                id="username"
                name="username"
                required
                value={userObj.username}
                onChange={getData}
            /> <br/>
            <input
                type="email"
                placeholder="Enter Email"
                id="email"
                name="email"
                required
                value={userObj.email}
                onChange={getData}
            /> <br/>
            <input
                type="password"
                placeholder="Enter Password"
                id="password"
                name="password"
                required
                value={userObj.password}
                onChange={getData}
            /> <br/>
            <input
                type="text"
                placeholder="Enter Address"
                id="address"
                name="address"
                required
                value={userObj.address}
                onChange={getData}
            /> <br/>
            <input
                type="submit"
                value={location.state?.userData ? "Update" : "Add User"}
            />
            <input
                type="reset"
                value="Reset User"
            /> <br/>
        </form>
    </>);
}
export default AddUser;